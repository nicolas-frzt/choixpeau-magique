import React, { useState } from 'react';
import { Page, Text, Image, View, Document } from '@react-pdf/renderer';
import { maisonsData } from '../data/maisons-data';

const pdfPartager = () => (<Document>
    <Page size="A4">
        <View>
            <Text style={{
            position: "absolute",
            width: "482px",
            height: "58px",
            left: "61px",
            top: "47px",
            
            fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "27px",
            lineHeight: "33px",
            textAlign: "center",
            
            color: "#000000"
        }}>Tu es admis.e à Gryffondor !</Text>
            <Image
                src={maisonsData[1].fondEcran}
                style={{
                    position: "absolute",
                    width: "499px",
                    height: "354px",
                    left: "48px",
                    top: "131px",

                    background: "#D9D9D9"
                }}
            />
            <Text
            style={{
                position: "absolute",
                width: "487px",
                height: "187px",
                left: "54px",
                top: "572px",

                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "24px",
                textAlign: "center",

                color: "#000000"

            }}>D’après le Choixpeau magique, Léna fait maintenant parti.e de la maison Gryffondor à Poudlard !</Text>
        </View>
    </Page>
    </Document>
);

const DownloadPdfButton = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      
      const pdfBlob = await pdfPartager.save();

      const blobUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'example.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Loading...' : 'Download PDF'}
    </button>
  );
};

export default DownloadPdfButton;
