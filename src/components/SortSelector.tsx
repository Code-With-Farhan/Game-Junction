import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  onSelectSort: (sortType: string | null) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sortOrders: any = {
    "-added": "Date Added",
    name: "Name",
    "-released": "Release Date",
    "-metacritic": "Popularity",
    "-rating": "Average Rating",
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort ? sortOrders[selectedSort] : "Relevance"}
      </MenuButton>
      <MenuList>
        {selectedSort && (
          <MenuItem onClick={() => onSelectSort(null)}>Relevance</MenuItem>
        )}
        {Object.keys(sortOrders).map((sortType) => (
          <MenuItem onClick={() => onSelectSort(sortType)} key={sortType}>
            {sortOrders[sortType]}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
