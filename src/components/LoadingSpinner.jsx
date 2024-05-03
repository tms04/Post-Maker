const LoadingSpinner = () => {
  return (
    <>
      <center>
        <div className="mt-5 spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};

export default LoadingSpinner;
