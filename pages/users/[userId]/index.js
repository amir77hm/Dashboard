import styled from "styled-components";
import HeadTag from "../../../components/HeadTag";

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const UserDetails = styled.div`
  flex-basis: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  span {
    line-height: 2rem;
  }
`;

const UserPosts = styled.div`
  flex-basis: 60%;

  @media (max-width: 850px) {
    margin-top: 2rem;
  }
`;

export default function UserId({ users, posts }) {
  const { id, name, username, email, phone, website, company } = users;

  return (
    <User>
      <HeadTag title={name} />

      {!!Object.keys(users).length && (
        <UserDetails>
          <span>{id}</span>
          <span>{name}</span>
          <span>{username}</span>
          <span>{email}</span>
          <span>{phone}</span>
          <span>{website}</span>
          <span>{company?.name}</span>
        </UserDetails>
      )}

      {/* this table can be a component but not necessary */}
      {!!posts?.length && (
        <UserPosts>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </UserPosts>
      )}
    </User>
  );
}

export async function getStaticPaths(context) {
  return {
    fallback: true,
    paths: [
      {
        // it wil be change so get list of userId from database
        params: {
          userId: "1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;

  // get post of user
  const postsRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  const postsData = await postsRes.json();

  // get user details
  const usersRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const usersData = await usersRes.json();

  // send data to page as props
  return {
    props: { posts: postsData || [], users: usersData || {} },
  };
}
