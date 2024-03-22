const FeedbackModal = () => {

    if (!show) {
        return null;
      }
   
     return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            zIndex: 1000,
          }}>
            <div>Modal content goes here</div>
            <button onClick={close}>Close</button>
          </div>
    );
 }
 
 export default FeedbackModal;