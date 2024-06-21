import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';

export const MyQRCode = ({ persona, value, videoUrl }) => {
  const [qrValue, setQrValue] = useState('');

  const getVideoUrl = async (persona) => {
    try {
      const response = await fetch('https://choice-goose-loved.ngrok-free.app/upload_video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify({ persona }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.video_url;
    } catch (error) {
      console.error('Error fetching video URL:', error);
      return '';
    }
  };

  useEffect(() => {
    if (videoUrl !== '') {
      getVideoUrl(persona).then((video_url) => {
        setQrValue(video_url);
	});
    }
	else {
		setQrValue('');
	  }
  }, [videoUrl, persona]);

  return (
    <div className="qr-code-wrapper">
      <QRCode
        value={qrValue}
        className={qrValue === '' ? 'qr-code' : 'qr-code qr-code-animation'}
        fgColor="#aa05c7"
      />
    </div>
  );
};

// import QRCode from "react-qr-code"

// export const MyQRCode = ({persona, value, videoUrl}) => {
// 	const get_video_url = async (persona) => {
// 		const response = await fetch('https://choice-goose-loved.ngrok-free.app/upload_video', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Accept': "*/*"
// 			},
// 			body: JSON.stringify({
// 				"persona": persona,
// 			})
// 		})
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok');
// 		  }
  
// 		  const data = await response.json();
// 		  console.log(data.video_url);
// 		  return data.video_url;
// 	}
// 	// get_video_url(persona);
// 	// const value1 = get_video_url(persona);
// 	return (
// 		<div className="qr-code-wrapper">
// 			<QRCode
// 				value={value}
// 				className={ videoUrl === "" ? "qr-code" : "qr-code qr-code-animation" }
// 				fgColor="#aa05c7"
// 			/>
// 		</div>
// 	);
// }