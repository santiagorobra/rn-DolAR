export const keyExtractor = ({ id }: { id: number }, index = 0) => `${id}-${index}`;
