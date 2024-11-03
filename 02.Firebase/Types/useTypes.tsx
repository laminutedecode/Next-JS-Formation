export type ModalType = {
  openModal: boolean;
  onClose: () => void;
  onOpen?: () => void;
  isUpdate?: boolean;
  member?: any;
};

export type DataType = {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  image: string;
  adress: string;
  cp: number;
  city: string;
  country: string;
};
export type DbContextType = {
  members: DataType[];
  addMember: (membersData: Omit<DataType, 'id'> & { image: string }) => Promise<void>; // Modification ici
  updateMember: (member: DataType) => Promise<void>; // Modification ici
  deleteMember: (id: string) => Promise<void>;
};

export type FormType = {
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
  image?: string; 
  adress: string;
  cp: number;
  city: string;
  country: string;
};