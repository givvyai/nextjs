const UserPublicProfile = async ({ params }: { params: any }) => {
  const profile = await getPulicUserProfile(params.username);
  return <div>Public Profile {params.username}</div>;
};

export default UserPublicProfile;
