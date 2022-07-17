import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HeadTag from "../../components/HeadTag";

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default function Users() {
  const router = useRouter();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRouteChange = (id) => {
    router.push(`/users/${id}`);
  };

  console.log(router.isFallback);

  // can fetch data in getStaticProps
  useEffect(() => {
    setIsLoading(true);
    // this can be with pagination for more users.
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <HeadTag title="لیست کاربران" />

      {!isLoading ? (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} onClick={() => handleRouteChange(user.id)}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>loading...</div>
      )}
    </Container>
  );
}
