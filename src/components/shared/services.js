
export const uploadVideo = async (base64String) => {
    try {
      const response = await fetch('http://localhost:3000/api/youtube/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64String }),
      });
  
      return response; // Assuming the server responds with JSON
    } catch (error) {
      console.error('Error uploading video:', error);
      throw error; // Propagate the error to the calling code
    }
  };
  