import { IoIosSearch } from 'react-icons/io';

export default function SearchBar() {
  return (
    <>
      <div>
        <IoIosSearch />
        <input type="search" placeholder="가게 이름으로 찾아보세요" />
      </div>
    </>
  );
}
