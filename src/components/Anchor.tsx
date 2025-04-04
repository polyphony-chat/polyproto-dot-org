import classNames from 'classnames'

const ANCHOR_STYLES = "border border-poly-green-1 bg-poly-black px-4 py-2 text-poly-green-1 rounded-md text-center hover:no-underline hover:text-poly-green-1 flex justify-center items-center"
export function Anchor(props: {
    className: string,
    href: string,
    children: React.ReactNode,
  }): JSX.Element {
    return (
      <a href={props.href} className={classNames(ANCHOR_STYLES, props.className)}>
        {props.children}
      </a>
    );
  }