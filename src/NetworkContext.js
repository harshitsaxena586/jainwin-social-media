import { createContext, useContext, useState } from "react";
import { request, GraphQLClient, gql } from "graphql-request";
// import { toast } from "react-hot-toast";
import axios from "axios";
import toast from "react-hot-toast";
const NetworkContext = createContext();

export function NetworkContextProvider({ children }) {
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  // -----------------------------------------

  async function networkCall(query, isClientLie, variables) {
    const endpoint = "https://socialmediaapollo.shreydd.repl.co/graphql";
    const authToken = localStorage.getItem("authToken");

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: authToken,
      },
    });
    if (!isClientLie) {
      try {
        setisLoading(true);
        const data = await graphQLClient.request(query, variables);
        return data;
      } catch (error) {
        const { code } = { error }.error.response.errors[0].extensions;
        console.log(code);
        if (code === "401") {
          toast.error(
            <div className="text-lg">Authentication failed Please </div>
          );
          process.exit.code(1);
        } else {
          return { error }.error.response.errors[0].extensions;
        }
      } finally {
        setisLoading(false);
      }
    } else {
      setTimeout(async () => {
        try {
          const data = await graphQLClient.request(query, variables);
        } catch (error) {
          toast.error(
            <h1 className="text-md font-medium	">
              Some error occurred ,Please try again
            </h1>
          );

          return { error };
        }
      }, 0);
    }
    return { success: true };
  }

  function Loading() {
    return (
      <div>
        {isLoading && (
          <div className="flex">
            <h1 className="text-center font-primary  text-5xl"> loading...</h1>
            <img
              className="max-w-xs"
              src="https://ik.imagekit.io/harshit/Ghost_eIlIjTo1S.gif"
              alt="loader"
            />
          </div>
        )}
      </div>
    );
  }
  return (
    <NetworkContext.Provider value={{ Loading, networkCall }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  return useContext(NetworkContext);
}
