// Import library
// Import components/assets/sections/....
import { useState } from 'react';
import { Button } from 'src/components';

export const Pagination = () => {
  const [page, setPage] = useState([1, 2, 3]);
  const [pageChoose, setPageChoose] = useState(1);
  const total = 20;
  const mount = 3;
  return (
    <div className="text-right mr-[12px]">
      <Button
        outline
        className="py-1 px-2 mx-1"
        onClick={() => {
          setPage([1, 2, 3]);
          setPageChoose(1);
        }}
      >
        {'<<'}
      </Button>
      {page[0] > 1 && (
        <Button
          outline
          className="py-1 px-2 mx-1"
          onClick={() => {
            if (pageChoose === 3 || pageChoose === 4) {
              setPage([1, 2, 3]);
              setPageChoose(1);
            } else {
              setPage([page[0] - 3, page[0] - 2, page[0] - 1]);
              setPageChoose(page[0] - 2);
            }
          }}
        >
          {'...'}
        </Button>
      )}
      {page?.map((item) => (
        <Button
          primary={item === pageChoose}
          outline
          key={item}
          onClick={() => {
            if (item >= 2 && item <= 19) setPage([item - 1, item, item + 1]);
            setPageChoose(item);
          }}
          className="py-1 px-2 mx-1"
        >
          {item}
        </Button>
      ))}
      {page[2] < total && (
        <Button
          outline
          className="py-1 px-2 mx-1"
          onClick={() => {
            if (pageChoose === total - 3 || pageChoose === total - 2) {
              setPage([total - 2, total - 1, total]);
              setPageChoose(total - 1);
            } else {
              setPage([page[2] + 1, page[2] + 2, page[2] + 3]);
              setPageChoose(page[2] + 2);
            }
          }}
        >
          {'...'}
        </Button>
      )}
      <Button
        outline
        className="py-1 px-2 mx-1"
        onClick={() => {
          setPage([total - 2, total - 1, total]);
          setPageChoose(total);
        }}
      >
        {'>>'}
      </Button>
    </div>
  );
};
