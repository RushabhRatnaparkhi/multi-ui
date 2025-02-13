"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

type Day = {
  date: Date;
  currentMonth: boolean;
};

type CalendarProps = {
  initialDate?: Date;
  onSelectDate?: (date: Date | null) => void;
};

const CalendarContainer = styled.div`
  width: 24rem;
  margin: 0 auto;
  background: linear-gradient(135deg, #020617, #1e1b4b);
  border-radius: 0.5rem;
  box-shadow: 
    0 8px 32px rgba(147, 51, 234, 0.3),
    0 0 0 1px rgba(147, 51, 234, 0.2),
    inset 0 0 20px rgba(147, 51, 234, 0.2);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
`;

const StarryBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(1px 1px at 10% 10%, #f0f9ff 100%, transparent 100%),
    radial-gradient(1px 1px at 20% 20%, #e0f2fe 100%, transparent 100%),
    radial-gradient(1px 1px at 30% 30%, #bae6fd 100%, transparent 100%),
    radial-gradient(1px 1px at 40% 40%, #7dd3fc 100%, transparent 100%),
    radial-gradient(2px 2px at 50% 50%, #38bdf8 100%, transparent 100%);
  background-size: 200px 200px;
  animation: twinkle 4s ease-in-out infinite alternate;
  opacity: 0.3;

  @keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  }
`;

const GalaxyEffect = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(168, 85, 247, 0.4) 0%, transparent 50%);
  filter: blur(30px);
  opacity: 0.4;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const HeaderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MonthButton = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9d5ff;
  font-size: 1.25rem;
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: 50%;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  
  &:hover {
    background: rgba(147, 51, 234, 0.2);
    box-shadow: 
      0 0 20px rgba(147, 51, 234, 0.3),
      inset 0 0 10px rgba(147, 51, 234, 0.2);
  }
`;

const MonthYearButton = styled(motion.button)`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e9d5ff;
  padding: 0.75rem 1.25rem;
  background: rgba(147, 51, 234, 0.1);
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  
  &:hover {
    background: rgba(147, 51, 234, 0.2);
    box-shadow: 
      0 0 20px rgba(147, 51, 234, 0.3),
      inset 0 0 10px rgba(147, 51, 234, 0.2);
  }
`;

const CosmicIcon = styled.span`
  font-size: 1.25rem;
  display: inline-block;
  filter: drop-shadow(0 0 5px rgba(147, 51, 234, 0.5));
  animation: orbit 4s linear infinite;

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(2px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(2px) rotate(-360deg); }
  }
`;

const YearSelector = styled(motion.div)`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(2, 6, 23, 0.95);
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: 0.5rem;
  box-shadow: 
    0 4px 20px rgba(147, 51, 234, 0.2),
    inset 0 0 10px rgba(147, 51, 234, 0.1);
  max-height: 12rem;
  overflow-y: auto;
  z-index: 10;
  min-width: 140px;
  padding: 0.5rem;
  backdrop-filter: blur(10px);

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(147, 51, 234, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(147, 51, 234, 0.3);
    border-radius: 2px;
  }
`;

const YearOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  color: #e9d5ff;
  border-radius: 0.25rem;
  border: none;
  background: transparent;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
  
  &:hover {
    background: rgba(147, 51, 234, 0.2);
    box-shadow: 
      0 0 10px rgba(147, 51, 234, 0.2),
      inset 0 0 5px rgba(147, 51, 234, 0.2);
  }
`;

const CalendarBody = styled.div`
  background: rgba(2, 6, 23, 0.6);
  border-radius: 0.5rem;
  padding: 1.25rem;
  border: 1px solid rgba(147, 51, 234, 0.3);
  backdrop-filter: blur(10px);
`;

const WeekdayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 1rem;
`;

const WeekdayLabel = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: #e9d5ff;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
`;

const DaysGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayButton = styled(motion.button)<{ isSelected: boolean; isCurrentMonth: boolean }>`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  position: relative;
  border: 1px solid transparent;
  background: transparent;
  color: #e9d5ff;
  text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);

  ${({ isSelected, isCurrentMonth }) => {
    if (isSelected) {
      return `
        background: rgba(147, 51, 234, 0.2);
        border-color: #9333ea;
        box-shadow: 
          0 0 15px rgba(147, 51, 234, 0.4),
          inset 0 0 5px rgba(147, 51, 234, 0.3);
      `;
    }
    if (isCurrentMonth) {
      return `
        &:hover {
          background: rgba(147, 51, 234, 0.1);
          border-color: rgba(147, 51, 234, 0.3);
          box-shadow: 0 0 10px rgba(147, 51, 234, 0.2);
        }
      `;
    }
    return `
      color: #6b21a8;
    `;
  }}
`;

const OrbitEffect = styled(motion.div)`
  position: absolute;
  inset: -4px;
  border: 1px solid #9333ea;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #e9d5ff;
    border-radius: 50%;
    top: 50%;
    left: -2px;
    box-shadow: 0 0 10px rgba(147, 51, 234, 0.8);
  }
`;

const Calendar_50: React.FC<CalendarProps> = ({ initialDate, onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isYearSelectorOpen, setIsYearSelectorOpen] = useState(false);

  const getDaysInMonth = (date: Date): Day[] => {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const days: Day[] = [];
    
    const firstDay = start.getDay() || 7;
    for (let i = 1; i < firstDay; i++) {
      const prevDate = new Date(date.getFullYear(), date.getMonth(), 1 - i);
      days.unshift({ date: prevDate, currentMonth: false });
    }
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth(), i),
        currentMonth: true,
      });
    }
    
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(date.getFullYear(), date.getMonth() + 1, i),
        currentMonth: false,
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelectDate?.(date);
  };

  const handleYearSelect = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setIsYearSelectorOpen(false);
  };

  return (
    <CalendarContainer>
      <StarryBackground />
      <GalaxyEffect />
      <Header>
        <HeaderControls>
          <MonthButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevMonth}
          >
            ←
          </MonthButton>
          <div className="relative">
            <MonthYearButton
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsYearSelectorOpen(!isYearSelectorOpen)}
            >
              <CosmicIcon>🌠</CosmicIcon>
              {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
            </MonthYearButton>
            <AnimatePresence>
              {isYearSelectorOpen && (
                <YearSelector
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                    <YearOption
                      key={year}
                      onClick={() => handleYearSelect(year)}
                    >
                      {year}
                    </YearOption>
                  ))}
                </YearSelector>
              )}
            </AnimatePresence>
          </div>
          <MonthButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNextMonth}
          >
            →
          </MonthButton>
        </HeaderControls>
      </Header>

      <CalendarBody>
        <WeekdayGrid>
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <WeekdayLabel key={index}>{day}</WeekdayLabel>
          ))}
        </WeekdayGrid>

        <DaysGrid
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.02 }
            }
          }}
        >
          {days.map(({ date, currentMonth }, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 10 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              className="relative"
            >
              <DayButton
                onClick={() => handleDateSelect(date)}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                isSelected={selectedDate?.toDateString() === date.toDateString()}
                isCurrentMonth={currentMonth}
              >
                {date.getDate()}
                {selectedDate?.toDateString() === date.toDateString() && (
                  <OrbitEffect
                    initial={false}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </DayButton>
            </motion.div>
          ))}
        </DaysGrid>
      </CalendarBody>
    </CalendarContainer>
  );
};

export default Calendar_50; 