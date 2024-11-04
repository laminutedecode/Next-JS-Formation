export interface User {
  id: number,
  name: string,
  email: string,
}

export interface ModalProps {
  onAccept: ()=> void;
  onRefuse: ()=> void;
}