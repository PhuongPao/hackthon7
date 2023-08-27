import "./HumanCard.scss";

export default function HumanCard({ img, name, role, desc }) {
  return (
    <div className="humancard">
      <img src={img} alt="" />
      <div className="humancard__bottom">
        <p className="name">{name}</p>
        <div className="role">
          <p className="role__name">{role}</p>
        </div>
        <p className="desc">
          {desc || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
      </div>
    </div>
  );
}


