import React, { CSSProperties, ReactNode, useState } from "react";

import MonthCalendar from "./MonthCalendar";
import Header from "./Header";
import "./index.scss";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import cs from "classnames";
import LocaleContext from "./LocaleContext";
import { useControllableValue } from "ahooks";

export interface CalendarProps {
  value?: Dayjs;
  defaultValue?: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  //定制日期显示，会完全覆盖日期单元格
  dateRender?: (date: Dayjs) => ReactNode;
  //定制日期单元格,内容会被添加到单元格内，只在全屏日历模式下生效
  dateInnerContent?: (date: Dayjs) => ReactNode;
  //国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { className, style, locale, onChange } = props;

  const [curValue, setCurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
  });
  const [curMonth, setCurMonth] = useState<Dayjs>(curValue);
  const classNames = cs("calendar", className);

  function changeDate(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }
  function selectHandler(date: Dayjs) {
    changeDate(date);
  }

  function prevMonthHandler() {
    setCurMonth(curMonth.subtract(1, "month"));
  }
  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, "month"));
  }
  function todayHandler() {
    const date = dayjs(Date.now());
    changeDate(date);
  }
  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
