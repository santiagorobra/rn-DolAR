export const keyExtractor = ({name, id}: {name: string; id: number}, index = 0) =>
  `${id}-${name}-${index}`;
