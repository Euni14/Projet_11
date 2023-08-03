import "./FeatureItem.css";

function FeatureItem({ imgSrc, imgAlt, title, description }) {
  return (
    <div class="feature-item">
      <img src={imgSrc} alt={imgAlt} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureItem;
