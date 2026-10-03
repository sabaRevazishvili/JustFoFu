export const ProfileCard = ({ nickname, img, email }) => {
  return (
    <div>
      <img src={img} alt={nickname} />
      <h3>nickname: {nickname}</h3>
      <p>email: {email}</p>
    </div>
  );
};
