import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn('relative flex w-full touch-none items-center select-none', className, 'group')}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative grow overflow-hidden rounded-full h-1 bg-white/40"
      >
        <SliderPrimitive.Range data-slot="slider-range" className="absolute h-full bg-white" />
      </SliderPrimitive.Track>

      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="
            block
            h-3 w-3
            rounded-full
            bg-white
            shadow
            opacity-0
            scale-75
            transition-opacity duration-200
            group-hover:opacity-100
            group-hover:scale-100
            focus:outline-none
            focus:ring-0
          "
        />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider };
