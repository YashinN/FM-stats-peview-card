const StatsCard = () => {
  return (
    <div className="stats-card">
      <img src="/images/image-header-desktop.jpg" alt="people working" />
      <div className="stats-content">
        <div className="stats-header">
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat">
            <p>10k+</p>
            <p>COMPANIES</p>
          </div>

          <div className="stat">
            <p>314</p>
            <p>TEMPLATES</p>
          </div>

          <div className="stat">
            <p>10k+</p>
            <p>QUERIES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;