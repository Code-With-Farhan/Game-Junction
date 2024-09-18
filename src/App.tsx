import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedSort: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery?.selectedGenre?.id || null}
            onSelectGenre={(selectedGenre) =>
              setGameQuery({ ...gameQuery, selectedGenre })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack marginLeft="40px">
          <PlatformSelector
            selectedPlatform={gameQuery?.selectedPlatform || null}
            onSelectPlatform={(selectedPlatform) =>
              setGameQuery({ ...gameQuery, selectedPlatform })
            }
          />
          <SortSelector
            selectedSort={gameQuery?.selectedSort || null}
            onSelectSort={(selectedSort) =>
              setGameQuery({ ...gameQuery, selectedSort })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      {/* <GridItem area="nav">Nav</GridItem> */}
    </Grid>
  );
}

export default App;
