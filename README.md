GrandM Launcher - GitHub build package

This archive is ready to upload to a new GitHub repository. After you push this to GitHub:
  1. Go to the Actions tab.
  2. Run the "Build GrandM Launcher" workflow (or push to main).
  3. Wait a few minutes; once complete, download the artifact "GrandM-Launcher".
  4. Inside the artifact you'll find the portable Windows executable (GrandM Launcher .exe).

To build locally on Windows:
  1. Install Node.js LTS (>=18) on Windows.
  2. Open PowerShell in this folder and run:
     npm install
     npm run dist:portable
  3. The built portable .exe will be in ./dist/

Replace assets/startup.wav with your own trap beat (WAV/MP3) if desired. The included audio is a short demo percussion synth.
