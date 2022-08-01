import { ReactElement, ReactFragment, ReactEventHandler } from "react";

export interface Layout {
    children:  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
}

export interface IButton {
  children: string,
  addClass: string,
  onClick: ReactEventHandler,
  icon: ReactElement
}

export interface IInputField{
  elementType: string,
  valueType: string,
  value: string,
  label: string,
  changed: ReactEventHandler
}