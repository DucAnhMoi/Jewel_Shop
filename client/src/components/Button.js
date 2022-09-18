// Import library
import { useRouter } from 'next/router';
// Import components/assets/sections/....

export function Button({
  //Logic
  to,
  href,
  //Style
  primary = false,
  secondary = false,
  text = false,
  outline = false,
  disabled = false,
  line = false,
  //Other Style
  className = '',
  //classHover
  classHover = '',
  //Style Content
  styleContent = '',
  //Icon
  leftIcon = false,
  rightIcon = false,
  //Style Icon
  styleLeftIcon = '',
  styleRightIcon = '',
  //
  children,
  onClick,
  ...passProps
}) {
  const router = useRouter();
  let props = {
    onClick,
    ...passProps,
  };

  // Disabled logic
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
    delete props.onClick;
  }

  //Logic Btn
  let Component = 'button';
  if (to) {
    props = {
      onClick: () => router.push(to),
      ...passProps,
    };
    Component = 'div';
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  //Style Btn
  if (primary) {
    var classes =
      'bg-btn text-[#fff] fill-[#fff] border-transparent hover:bg-[#fff] hover:text-[#000] hover:fill-[#000] hover:border-btn dark:bg-[#fff] dark:text-[#000] dark:fill-[#000] dark:border-transparent dark:hover:bg-btn dark:hover:text-[#fff] dark:hover:fill-[#fff] dark:hover:border-btn';
  } else if (secondary) {
    var classes =
      'bg-[#fff] text-[#000] fill-[#000] border-transparent hover:bg-btn hover:text-[#fff] hover:fill-[#fff] hover:border-[#fff] dark:bg-btn dark:text-[#fff] dark:fill-[#fff] dark:border-transparent dark:hover:bg-[#fff] dark:hover:text-[#000] dark:hover:fill-[#000] dark:hover:border-[#fff]';
  } else if (text) {
    var classes = 'relative border-transparent';
  } else if (outline) {
    var classes =
      'bg-[#fff] text-[#000] border-[#000] fill-[#000] hover:bg-btn hover:text-[#fff] hover:border-[#fff] hover:fill-[#fff] dark:bg-btn dark:text-[#fff] dark:border-btn dark:fill-[#fff] dark:hover:bg-[#fff] dark:hover:text-[#000] dark:hover:border-btn dark:hover:fill-[#000]';
  } else if (disabled) {
    var classes = 'bg-[#aaa] text-btn line-through';
  }

  // Logic Hover
  // if (classHover) {
  //   var classHoverLast = classHover
  //     .split(' ')
  //     .map((item) => `hover:${item}`)
  //     .join(' ');
  // }

  return (
    <Component
      {...props}
      className={`btn border rounded-lg cursor-pointer ${classes} ${className} ${classHover} activeButtonCha`}
    >
      {leftIcon && <div className={styleLeftIcon}>{leftIcon}</div>}
      <div className={styleContent}>{children}</div>
      {rightIcon && <div className={styleRightIcon}>{rightIcon}</div>}
      {line && <div className="absolute bg-active h-[3px] activeButtonCon"></div>}
    </Component>
  );
}
