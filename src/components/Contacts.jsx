import React, { useState } from 'react';

const Contacts = () => {
  const phones = [
    {
      visible: "+39 333 868 3925",
      raw: "393338683925"
    },
    {
      visible: "+39 376 282 2985",
      raw: "393762822985"
    }
  ];

  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyPhone = async (raw, index) => {
    try {
      await navigator.clipboard.writeText("+" + raw);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='text-center dancing-script-400 py-5 textDarkGray'>
      <h1 className='display-2 pb-3'>Giulia</h1>

      {phones.map((phone, index) => (
        <div 
          key={index}
          className='d-flex justify-content-center align-items-center gap-3 mt-3'
        >
          
          {/* Numero cliccabile */}
          <a 
            href={`tel:+${phone.raw}`} 
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h2 style={{ margin: 0 }}>{phone.visible}</h2>
          </a>

          {/* Copia */}
          <button 
            onClick={() => copyPhone(phone.raw, index)} 
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontSize: "22px"
            }}
          >
            {copiedIndex === index ? "✔️" : "📄"}
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phone.raw}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "22px", textDecoration: "none" }}
          >
            💬
          </a>

        </div>
        
      ))}

      <div className='mt-5 display-1 d-flex justify-content-center align-items-center flex-wrap'>
        <i className='bi bi-geo-alt-fill textYellow me-3'></i>
        <h1>Via Alfonso Borelli, 7 - 00161, Roma</h1>
      </div>
    </div>
  );
};

export default Contacts;