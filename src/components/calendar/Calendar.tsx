"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventClickArg, EventContentArg } from "@fullcalendar/core"; // Tipagem de eventos do FullCalendar

// Interface para os eventos
interface CalendarEvent {
  title: string;
  start: string; // Formato ISO 8601 (ex.: "2025-05-13T10:00:00")
  end?: string;
  allDay?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  classNames?: string;
  display?: string;
}

// Interface para os horários possíveis
interface PossibleTime {
  time: string;
}

interface ChoiceProps {
  sendChoice: string;
  changeChoice: (choice: string) => void;
}

const Calendar = ({ sendChoice, changeChoice }: ChoiceProps) => {
  const [choice, setChoice] = useState<string>(sendChoice);
  console.log(choice);
  const [events] = useState<CalendarEvent[]>([
    { title: "10:00", start: "2025-05-13T10:00:00", allDay: false },
    { title: "11:00", start: "2025-05-13T11:00:00", allDay: false },
    { title: "12:00", start: "2025-05-13T12:00:00", allDay: false },
    { title: "13:00", start: "2025-05-13T13:00:00", allDay: false },
    { title: "14:00", start: "2025-05-13T14:00:00", allDay: false },
    { title: "15:00", start: "2025-05-13T15:00:00", allDay: false },
    { title: "18:00", start: "2025-05-15T18:00:00", allDay: false },
  ]);

  const getTomorrow = (): string => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate());
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateClick = (arg: DateClickArg) => {
    const today = new Date();
    const clickedDate = new Date(arg.dateStr);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (clickedDate < tomorrow) {
      alert(
        "Agendamentos devem ser feitos com pelo menos 1 dia de antecedência."
      );
      return;
    }
    const clickedDateFormatted = new Date(arg.dateStr);
    const formattedDate = `${String(clickedDateFormatted.getDate()).padStart(
      2,
      "0"
    )}/${String(clickedDateFormatted.getMonth() + 1).padStart(
      2,
      "0"
    )}/${clickedDateFormatted.getFullYear()} ${String(
      clickedDateFormatted.getHours()
    ).padStart(2, "0")}:${String(clickedDateFormatted.getMinutes()).padStart(
      2,
      "0"
    )}`;
    const newChoice = formattedDate;
    setChoice(newChoice);
    changeChoice(newChoice);
  };

  const possibleTimes: PossibleTime[] = Array.from({ length: 9 }, (_, i) => {
    const hour = 10 + i;
    return { time: `${String(hour).padStart(2, "0")}:00` };
  });
  const generateEvents = (): CalendarEvent[] => {
    const startDate = new Date(getTomorrow());
    const allEvents: CalendarEvent[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dateStr = currentDate.toISOString().split("T")[0];

      possibleTimes.forEach((time) => {
        const eventExists = events.some(
          (event) =>
            event.start === `${dateStr}T${time.time}:00` &&
            event.title === time.time
        );
        allEvents.push({
          title: eventExists ? time.time : "—",
          start: `${dateStr}T${time.time}:00`,
          end: `${dateStr}T${String(
            Number(time.time.split(":")[0]) + 1
          ).padStart(2, "0")}:00`,
          allDay: false,
          backgroundColor: eventExists ? "#affec5" : "transparent",
          borderColor: "#f1f3f2",
          textColor: eventExists ? "black" : "black",
          classNames: eventExists
            ? "cursor-pointer !flex !justify-center !items-center hover:opacity-60 !border-[#f1f3f2]"
            : "border-[#f1f3f2]",
          display: "block",
        });
      });
    }
    return allEvents;
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={generateEvents()}
      dateClick={handleDateClick}
      selectable={true}
      slotMinTime="10:00:00"
      slotMaxTime="19:00:00"
      allDaySlot={false}
      height="auto"
      contentHeight="600px"
      eventClick={(info: EventClickArg) => {
        if (info.event.title === "—") {
          alert("Horário indisponível.");
          return;
        }
        alert(`Agendar ${info.event.title}?`);
      }}
      initialDate={getTomorrow()}
      validRange={{
        start: getTomorrow(),
      }}
      locale="pt-br"
      locales={[ptBrLocale]}
      dayHeaderContent={(arg) => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const date = new Date(arg.date);
        const day = String(date.getDate()).padStart(2, "0");
        const month = date
          .toLocaleDateString("pt-BR", { month: "short" })
          .replace(".", "");
        let label = "";

        if (date.toDateString() === today.toDateString()) {
          label = "Hoje";
        } else if (date.toDateString() === tomorrow.toDateString()) {
          label = "Amanhã";
        } else {
          label = date
            .toLocaleDateString("pt-BR", { weekday: "short" })
            .replace(".", "");
        }

        return (
          <div className="text-center">
            <div className="text-black font-bold text-[18px] label-calendar">
              {label}
            </div>
            <div className="text-[#A1A1A1] font-normal text-[16px]">{`${day} ${month}`}</div>
          </div>
        );
      }}
      slotLabelFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
      titleFormat={(date) => {
        const start = new Date(date.start.marker);
        const day = String(start.getDate()).padStart(2, "0");
        const month = String(start.getMonth() + 1).padStart(2, "0");
        const year = start.getFullYear();
        return `${day}/${month}/${year}`;
      }}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "timeGridWeek",
      }}
      slotLabelClassNames="text-gray-600 font-medium"
      eventContent={(arg: EventContentArg) => {
        return (
          <div className="flex justify-center items-center h-full  w-full">
            {arg.event.title}
          </div>
        );
      }}
    />
  );
};

export default Calendar;
