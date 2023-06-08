export type IBlogCardProps = {
    userId: string;
    title: string;
    id : string;
    body: string;
    handleDeleteClick: (id: string) => Promise<void>
  };

  export interface Blog {
    id: string;
    title: string;
    body: string;
    userId: string;
  }
