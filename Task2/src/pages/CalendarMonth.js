import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import { Popover, Button } from "@mui/material";
import Eventsdata from "./Eventsdata.json";

const CalendarMonth = ({ selectedMonth }) => {
  const [data, setData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setData(Eventsdata.data.getEvents);
  }, []);

  const eventsInSelectedMonth = data.filter((event) => {
    const eventDate = new Date(event.date_event);
    return (
      eventDate.getMonth() === selectedMonth.getMonth() &&
      eventDate.getFullYear() === selectedMonth.getFullYear()
    );
  });

  const eventCounts = {};
  eventsInSelectedMonth.forEach((event) => {
    const eventDate = new Date(event.date_event).getDate();
    eventCounts[eventDate] = (eventCounts[eventDate] || 0) + 1;
  });
  const getEventCountForDate = (date) => eventCounts[date] || 0;

  const handleDayClick = (event, day) => {
    const filteredEvents = eventsInSelectedMonth.filter((event) => {
      const eventDate = new Date(event.date_event).getDate();
      return eventDate === day;
    });
    setSelectedEvent(filteredEvents);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setSelectedEvent(null);
    setAnchorEl(null);
  };

  const daysInMonth = new Date(
    selectedMonth.getFullYear(),
    selectedMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = new Date(
    selectedMonth.getFullYear(),
    selectedMonth.getMonth()
  ).getDay();
  console.log(firstDayIndex);
  const monthName = selectedMonth.toLocaleString("default", { month: "long" });
  const year = selectedMonth.getFullYear();

  const getDaysArray = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  };
  const daysArray = getDaysArray(1, daysInMonth);
  const open = Boolean(anchorEl);

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >{`${monthName} ${year}`}</h2>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "1260px",
            xl: "1260px",
          },
          margin: {
            xs: "2px",
            xl: "auto",
          },
        }}
        style={{}}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "180px",
                  xl: "180px",
                },
                paddingLeft: {
                  xs: "2px",
                  sm: "2px",
                  md: "4px",
                  lg: "10px",
                  xl: "10px",
                },
                paddingRight: {
                  xs: "2px",
                  sm: "4px",
                  md: "6px",
                  lg: "10px",
                  xl: "10px",
                },
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "20px",
                  xl: "20px",
                },
                lineHeight: {
                  xs: "15px",
                  sm: "15px",
                  md: "20px",
                  lg: "40px",
                  xl: "40px",
                },
              }}
              key={day}
              style={{
                fontWeight: 700,
                textAlign: "center",
                borderLeftWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderColor: "#9CA3AF",
              }}
            >
              {day}
            </Box>
          ))}
          {[...Array(firstDayIndex - 1).fill(null), ...daysArray].map(
            (day, index) => (
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "180px",
                    xl: "180px",
                  },
                  height: {
                    xs: "40px",
                    sm: "50px",
                    md: "70px",
                    lg: "100px",
                    xl: "100px",
                  },
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "14px",
                    lg: "24px",
                    xl: "24px",
                  },
                  lineHeight: {
                    xs: "15px",
                    sm: "18px",
                    md: "21px",
                    lg: "32px",
                    xl: "32px",
                  },
                }}
                key={index}
                style={{
                  borderWidth: "1px",
                  paddingRight: "2px",
                  borderColor: "#9CA3AF",
                  fontWeight: 700,
                  cursor: "pointer",
                  position: "relative",
                  backgroundColor:
                    getEventCountForDate(day) >= 20
                      ? "#3B82F6"
                      : getEventCountForDate(day) >= 10
                      ? "#60A5FA"
                      : getEventCountForDate(day) >= 1
                      ? "#BFDBFE"
                      : "",
                }}
                onClick={(event) => handleDayClick(event, day)}
              >
                {day > 0 && (
                  <div>
                    <Box
                      sx={{
                        paddingLeft: {
                          xs: "2px",
                          sm: "2px",
                          md: "4px",
                          lg: "6px",
                          xl: "8px",
                        },
                      }}
                    >
                      {day}
                    </Box>
                    <Box
                      sx={{
                        fontSize: {
                          xs: "6px",
                          sm: "10px",
                          md: "12px",
                          lg: "16px",
                          xl: "18px",
                        },
                        lineHeight: {
                          xs: "10px",
                          sm: "15px",
                          md: "18px",
                          lg: "28px",
                          xl: "28px",
                        },
                        textAlign: "center",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      ({getEventCountForDate(day)})
                    </Box>
                  </div>
                )}
              </Box>
            )
          )}
        </div>
        <Popover
          open={selectedEvent && selectedEvent.length > 0 ? open : false}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              maxHeight: "40vh",
              maxWidth: "60vh",
              overflowY: "auto",
              overflowX: "auto",
            },
          }}
        >
          {selectedEvent && selectedEvent.length > 0 ? (
            <div
              style={{
                fontWeight: 700,
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingRight: {
                  xs: "12px",
                  sm: "10px",
                  md: "12px",
                  lg: "20px",
                  xl: "20px",
                },
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "12px",
                  lg: "20px",
                  xl: "20px",
                },
              }}
            >
              Events
            </div>
          ) : (
            ""
          )}

          <div>
            {selectedEvent && selectedEvent.length > 0 ? (
              <Table
                style={{
                  overflowY: "auto",
                  overflowX: "auto",
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        paddingLeft: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingRight: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingTop: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                        paddingBottom: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                      }}
                      style={{
                        border: "1px solid #ccc",
                        fontWeight: 700,
                        lineHeight: "18px",
                      }}
                    >
                      Event Name
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingLeft: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingRight: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingTop: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                        paddingBottom: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                      }}
                      style={{
                        border: "1px solid #ccc",
                        fontWeight: 700,
                        lineHeight: "18px",
                      }}
                    >
                      Event Time
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingLeft: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingRight: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingTop: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                        paddingBottom: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                      }}
                      style={{
                        border: "1px solid #ccc",
                        fontWeight: 700,
                        lineHeight: "18px",
                      }}
                    >
                      Asset
                    </TableCell>
                    <TableCell
                      sx={{
                        paddingLeft: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingRight: {
                          xs: "12px",
                          sm: "10px",
                          md: "12px",
                          lg: "20px",
                          xl: "20px",
                        },
                        paddingTop: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                        paddingBottom: {
                          xs: "2px",
                          sm: "2px",
                          md: "6px",
                          lg: "8px",
                          xl: "8px",
                        },
                      }}
                      style={{
                        border: "1px solid #ccc",
                        fontWeight: 700,
                        lineHeight: "18px",
                      }}
                    >
                      Event Type
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedEvent.map((event, index) => {
                    const eventDate = new Date(event.date_event);
                    const formattedTime = eventDate.toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      }
                    );
                    return (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            paddingLeft: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingRight: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingTop: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                            paddingBottom: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                          }}
                          style={{
                            border: "1px solid #ccc",
                            lineHeight: "18px",
                          }}
                        >
                          {event.title.en}
                        </TableCell>
                        <TableCell
                          sx={{
                            paddingLeft: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingRight: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingTop: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                            paddingBottom: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                          }}
                          style={{
                            border: "1px solid #ccc",
                            lineHeight: "18px",
                          }}
                        >
                          {formattedTime}
                        </TableCell>
                        <TableCell
                          sx={{
                            paddingLeft: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingRight: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingTop: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                            paddingBottom: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                          }}
                          style={{
                            border: "1px solid #ccc",
                            lineHeight: "18px",
                          }}
                        >
                          {event.coins.map((coin) => coin.fullname).join(", ")}
                        </TableCell>
                        <TableCell
                          sx={{
                            paddingLeft: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingRight: {
                              xs: "12px",
                              sm: "10px",
                              md: "12px",
                              lg: "20px",
                              xl: "20px",
                            },
                            paddingTop: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                            paddingBottom: {
                              xs: "2px",
                              sm: "2px",
                              md: "6px",
                              lg: "8px",
                              xl: "8px",
                            },
                          }}
                          style={{
                            border: "1px solid #ccc",
                            lineHeight: "18px",
                          }}
                        >
                          {event.categories
                            .map((category) => category.name)
                            .join(", ")}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              ""
            )}
          </div>
        </Popover>
      </Box>
    </>
  );
};

export default CalendarMonth;
