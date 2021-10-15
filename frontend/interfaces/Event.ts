interface Event {
  id: number;
  title: string;
  description: string;
  price: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export default Event;
