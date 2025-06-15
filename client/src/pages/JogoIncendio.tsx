import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, RotateCcw, Flame, TreePine } from 'lucide-react';

type CellState = 'normal' | 'fire' | 'extinguished';

interface Cell {
  state: CellState;
  id: string;
}

const GRID_SIZE = 10;
const FIRE_SPREAD_INTERVAL = 2000;
const NEW_FIRE_INTERVAL = 3000; 
const GAME_DURATION = 60; 
const MAX_FIRE_CELLS = 10;

const JogoIncendio: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost' | 'paused'>('playing');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [fireCellsCount, setFireCellsCount] = useState(0);
  const [extinguishedCount, setExtinguishedCount] = useState(0);

  const initializeGrid = useCallback(() => {
    const newGrid: Cell[][] = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      const gridRow: Cell[] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        gridRow.push({
          state: 'normal',
          id: `${row}-${col}`
        });
      }
      newGrid.push(gridRow);
    }
    return newGrid;
  }, []);

  const resetGame = useCallback(() => {
    const newGrid = initializeGrid();
    const firePositions = [];
    for (let i = 0; i < 3; i++) {
      const row = Math.floor(Math.random() * GRID_SIZE);
      const col = Math.floor(Math.random() * GRID_SIZE);
      if (newGrid[row][col].state === 'normal') {
        newGrid[row][col].state = 'fire';
        firePositions.push({ row, col });
      }
    }
    
    setGrid(newGrid);
    setGameState('playing');
    setTimeLeft(GAME_DURATION);
    setFireCellsCount(firePositions.length);
    setExtinguishedCount(0);
  }, [initializeGrid]);

  const countFireCells = useCallback((currentGrid: Cell[][]) => {
    let count = 0;
    currentGrid.forEach(row => {
      row.forEach(cell => {
        if (cell.state === 'fire') count++;
      });
    });
    return count;
  }, []);

  const addRandomFire = useCallback((currentGrid: Cell[][]) => {
    const normalCells = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (currentGrid[row][col].state === 'normal') {
          normalCells.push({ row, col });
        }
      }
    }
    
    if (normalCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * normalCells.length);
      const { row, col } = normalCells[randomIndex];
      const newGrid = [...currentGrid];
      newGrid[row][col].state = 'fire';
      return newGrid;
    }
    return currentGrid;
  }, []);

  const spreadFire = useCallback((currentGrid: Cell[][]) => {
    const newGrid = currentGrid.map(row => [...row]);
    const fireSpreadChance = 0.3; 
    
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        if (currentGrid[row][col].state === 'fire') {
          const adjacent = [
            { r: row - 1, c: col },
            { r: row + 1, c: col },
            { r: row, c: col - 1 },
            { r: row, c: col + 1 }
          ];
          
          adjacent.forEach(({ r, c }) => {
            if (
              r >= 0 && r < GRID_SIZE && 
              c >= 0 && c < GRID_SIZE && 
              currentGrid[r][c].state === 'normal' &&
              Math.random() < fireSpreadChance
            ) {
              newGrid[r][c].state = 'fire';
            }
          });
        }
      }
    }
    
    return newGrid;
  }, []);

  const handleCellClick = useCallback((row: number, col: number) => {
    if (gameState !== 'playing') return;
    
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      if (newGrid[row][col].state === 'fire') {
        newGrid[row][col].state = 'extinguished';
        setExtinguishedCount(prev => prev + 1);
      }
      return newGrid;
    });
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, gameState]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const spreadTimer = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = spreadFire(prevGrid);
        return newGrid;
      });
    }, FIRE_SPREAD_INTERVAL);
    
    return () => clearInterval(spreadTimer);
  }, [gameState, spreadFire]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const fireTimer = setInterval(() => {
      setGrid(prevGrid => {
        const fireCount = countFireCells(prevGrid);
        if (fireCount < MAX_FIRE_CELLS - 2) {
          return addRandomFire(prevGrid);
        }
        return prevGrid;
      });
    }, NEW_FIRE_INTERVAL);
    
    return () => clearInterval(fireTimer);
  }, [gameState, addRandomFire, countFireCells]);

  useEffect(() => {
    const count = countFireCells(grid);
    setFireCellsCount(count);
  }, [grid, countFireCells]);

  useEffect(() => {
    if (gameState !== 'playing') return;
    
    if (timeLeft <= 0) {
      if (fireCellsCount < MAX_FIRE_CELLS) {
        setGameState('won');
      } else {
        setGameState('lost');
      }
    } else if (fireCellsCount >= MAX_FIRE_CELLS) {
      setGameState('lost');
    }
  }, [timeLeft, fireCellsCount, gameState]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  const getCellStyle = (state: CellState) => {
    switch (state) {
      case 'fire':
        return 'bg-red-500 hover:bg-red-600 shadow-lg animate-pulse cursor-pointer';
      case 'extinguished':
        return 'bg-gray-400 cursor-not-allowed';
      case 'normal':
      default:
        return 'bg-green-400 hover:bg-green-500';
    }
  };

  const getCellIcon = (state: CellState) => {
    switch (state) {
      case 'fire':
        return <Flame className="text-orange-200" size={16} />;
      case 'extinguished':
        return <div className="w-2 h-2 bg-gray-600 rounded-full" />;
      case 'normal':
      default:
        return <TreePine className="text-green-800" size={12} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="container mx-auto max-w-4xl">

        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/conscientizacao" 
            className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
          
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            🔥 Combate ao Incêndio Florestal
          </h1>
          
          <button
            onClick={resetGame}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <RotateCcw size={18} />
            Reiniciar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600">
              {timeLeft}s
            </div>
            <div className="text-sm text-gray-600">Tempo Restante</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl font-bold text-red-600">
              {fireCellsCount}
            </div>
            <div className="text-sm text-gray-600">Células em Chamas</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl font-bold text-gray-600">
              {extinguishedCount}
            </div>
            <div className="text-sm text-gray-600">Fogos Apagados</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600">
              {MAX_FIRE_CELLS - fireCellsCount > 0 ? MAX_FIRE_CELLS - fireCellsCount : 0}
            </div>
            <div className="text-sm text-gray-600">Margem Segura</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <p className="text-center text-gray-700">
            <strong>Instruções:</strong> Clique nas células em chamas (🔥) para apagar o fogo. 
            Mantenha menos de {MAX_FIRE_CELLS} células queimando por {GAME_DURATION} segundos para vencer!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div 
            className="grid gap-1 mx-auto max-w-md"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
              aspectRatio: '1'
            }}
          >
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={cell.id}
                  className={`
                    aspect-square flex items-center justify-center rounded transition-all duration-200
                    ${getCellStyle(cell.state)}
                  `}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {getCellIcon(cell.state)}
                </div>
              ))
            )}
          </div>
        </div>

        {(gameState === 'won' || gameState === 'lost') && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 text-center">
              {gameState === 'won' ? (
                <>
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold text-green-600 mb-4">
                    Parabéns! Você salvou a floresta!
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Você conseguiu controlar o incêndio e proteger a natureza. 
                    Fogos apagados: <strong>{extinguishedCount}</strong>
                  </p>
                </>
              ) : (
                <>
                  <div className="text-6xl mb-4">😔</div>
                  <h2 className="text-2xl font-bold text-red-600 mb-4">
                    O fogo se espalhou demais!
                  </h2>
                  <p className="text-gray-700 mb-6">
                    A floresta foi devastada pelo incêndio. 
                    Tente novamente e seja mais rápido para apagar as chamas!
                  </p>
                </>
              )}
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetGame}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Jogar Novamente
                </button>
                
                <Link
                  href="/conscientizacao"
                  className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-medium"
                >
                  Voltar
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">💚 Sabia que...</h3>
          <p className="text-green-100">
            Os incêndios florestais destroem milhões de hectares por ano no Brasil. 
            A prevenção e o combate rápido são essenciais para preservar nossos ecossistemas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JogoIncendio;