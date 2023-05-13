// create out directory for static Chrome Extension

const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const glob = require('glob');

const files = glob.sync('out/**/*.html');
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const modifiedContent = content.replace(/\/_next/g, './next');
  fs.writeFileSync(file, modifiedContent, 'utf-8');
});

const sourcePath = 'out/_next';
const destinationPath = 'out/next';

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) {
    console.error('Failed to rename "_next" directory to "next".', err);
  } else {
    console.log('Renamed "_next" directory to "next" successfully.');

    const assetSourceDir = 'public/next-assets';
    const assetDestinationDir = 'out/next-assets';

    ncp(assetSourceDir, assetDestinationDir, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Assets copied successfully.');
      }
    });
  }
});
