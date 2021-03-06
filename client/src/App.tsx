import "react";
import { AppShell, Text, Header, MantineProvider, Global } from "@mantine/core";
import AppRoutes from "./routes";
import { Link } from "react-router-dom";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <AppShell
        header={
          <Header height={60} p="xs">
            <Text size="xl" color={"indigo"}>
              <Link to={"/"}>{"Cryptosouvenirs"}</Link>
            </Text>
          </Header>
        }
        styles={(theme) => ({
          main: {
            minHeight: `calc(100vh - 60px)`,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.gray[8],
          },
        })}
      >
        <Global
          styles={(theme) => ({
            body: {
              margin: 0,
              fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif`,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            },
            code: {
              fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
            },
            a: {
              textDecoration: "none",
              color: theme.colors.indigo[5],
              "&:hover": {
                color: theme.colors.indigo[3],
              },
            },
          })}
        />
        <AppRoutes />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
