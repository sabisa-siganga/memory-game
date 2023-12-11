// Interface representing a card in the deck.
export interface Card {
  image: string;
  color: string;
  label: string | number;
  isRemoved: boolean;
}
