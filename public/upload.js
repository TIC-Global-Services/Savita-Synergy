const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dxks5qn1d',
  api_key: '135197744291193',
  api_secret: '4MYRj7DGdGCsL_-Jq-2PvB0dTMc',
});

// Function to upload image sequences to Cloudinary
async function uploadImageSequences() {
  const mobileFolder = 'savita-assets/3d-sequence/mobile/';
  const desktopFolder = 'savita-assets/3d-sequence/desktop/';
  const localMobilePath = './mobile-sequence/compressed/pillow';
  const localDesktopPath = './desktop-sequence/compressed/pillow';
  const mobileFrameCount = 3269;
  const desktopFrameCount = 3706;

  // Function to upload a single image
  async function uploadImage(filePath, folder, publicId) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: folder,
        public_id: publicId,
        resource_type: 'image',
        format: 'webp',
      });
      console.log(`Uploaded: ${result.public_id}`);
      return result;
    } catch (error) {
      console.error(`Error uploading ${filePath}:`, error.message);
      throw error;
    }
  }

  // Upload mobile sequence
  console.log('Starting mobile sequence upload...');
  for (let i = 1; i <= mobileFrameCount; i++) {
    const fileName = `${i.toString().padStart(4, '0')}.webp`;
    const filePath = path.join(localMobilePath, fileName);
    const publicId = `${i.toString().padStart(4, '0')}`;

    try {
      // Check if file exists
      await fs.access(filePath);
      await uploadImage(filePath, mobileFolder, publicId);
      console.log(`Mobile frame ${i}/${mobileFrameCount} uploaded`);
    } catch (error) {
      console.error(`Failed to process mobile frame ${fileName}:`, error.message);
    }
  }

  // Upload desktop sequence
  console.log('Starting desktop sequence upload...');
  for (let i = 1; i <= desktopFrameCount; i++) {
    const fileName = `${i.toString().padStart(4, '0')}.webp`;
    const filePath = path.join(localDesktopPath, fileName);
    const publicId = `${i.toString().padStart(4, '0')}`;

    try {
      // Check if file exists
      await fs.access(filePath);
      await uploadImage(filePath, desktopFolder, publicId);
      console.log(`Desktop frame ${i}/${desktopFrameCount} uploaded`);
    } catch (error) {
      console.error(`Failed to process desktop frame ${fileName}:`, error.message);
    }
  }

  console.log('Upload completed!');
}

// Run the upload function
uploadImageSequences().catch((error) => {
  console.error('Upload process failed:', error.message);
  process.exit(1);
});