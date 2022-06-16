export const keyExtractor = ({ nombre }: { nombre: string }, index = 0) => `${nombre}-${index}`;
