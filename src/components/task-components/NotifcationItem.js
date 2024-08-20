export default function NotifcationItem({ img, name, title }) {
  return (
    <>
      <div className="notifications-box-item">
        <img src={img} alt="User image" />
        <div className="notifications-box-item-info">
          <h5>{name}</h5>
          <p>{title}</p>
        </div>
        <span> 35min</span>
      </div>
    </>
  );
}
