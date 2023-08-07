// import { useRouter } from "next/router";

// const Profile = () => {
//     const router = useRouter();
//     const {username} = router.query;

//     return <div>
//         Hello ! {username}
//     </div>;
// }

// export default Profile;

export default function Profile({ params }) {
    return (
      <>
        <div className='container py-5'>
          <h1>My Post: {params.username}</h1> 
          <p>Solution {params.username}</p>   
        </div>
      </>
    )
  }