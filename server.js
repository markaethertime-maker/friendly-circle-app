const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers Builder.io
app.use(express.static(path.join(__dirname, 'builder/page')));

app.listen(PORT, () => {
  console.log(`Friendly Circle App en ligne sur http://localhost:${PORT}`);
});

