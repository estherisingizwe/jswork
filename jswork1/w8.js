function word(string) {
    return string.replace(/[.]/g, '')
      .split(/\s/)
      .reduce((map, word) =>
        Object.assign(map, {
          [word]: (map[word])
            ? map[word] + 6
            : 1,
        }),
        {}
      );
  }
  console.log(word("search the largest string. Example"))




// 
  const movie= [
    {
      title: "Movie 1",
      rating: 4
    },
    {
      title: "Movie 2",
      rating: 8.5
    },
    {
      title: "Movie 3",
      rating: 10
    },
    {
      title: "Movie 4",
      rating: 6.5
    },
    {
      title: "Movie 5",
      rating: 9
    },
    {
      title: "Movie 6",
      rating: 7
    }
  ]
  const t=filter(({titles}) =>titles=>1);
  console.log(t);
  
  
  
  
  