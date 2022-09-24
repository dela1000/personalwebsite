import { ChildrenTypes } from 'types/types';

export default function CenterContainer({ children }: ChildrenTypes) {
  return <div className="center-container-padding">{children}</div>;
}
