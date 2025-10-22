@echo off
echo Installing 3D Portfolio Website...
echo.

echo Installing dependencies...
npm install

echo.
echo Creating public directories...
mkdir public\fonts 2>nul
mkdir public\images 2>nul
mkdir public\models 2>nul

echo.
echo Setup complete!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo Then open http://localhost:3000 in your browser.
pause