screen = get(0, "ScreenSize");
screenX = screen(3);
screenY = screen(4);
guiX = screenX;
guiY = screenY;
screen1 = figure("Color", "blue", "Position", [0, 0, guiX, guiY]);

boyfriend = uicontrol("Style", "pushbutton");
set(boyfriend, "Position", [75, (screenY - 200), 220, 100]);
set(boyfriend, "String", "Boyfriend");
set(boyfriend, "CallBack", @boyfriendCallback);

meanMessage = uicontrol("Style", "pushbutton");
set(meanMessage, "Position", [(screenX - 295), (screenY - 200), 220, 100]);
set(meanMessage, "String", "Mean message");
set(meanMessage, "CallBack", @meanMessageCallback);

breakUp = uicontrol("Style", "pushbutton");
set(breakUp, "Position", [75, 100, 220, 100]);
set(breakUp, "String", "Break up");
set(breakUp, "CallBack", @breakUpCallback);

girlsNowSingle = uicontrol("Style", "pushbutton");
set(girlsNowSingle, "Position", [(screenX - 295), 100, 220, 100]);
set(girlsNowSingle, "String", "Girls now single");
set(girlsNowSingle, "CallBack", @girlsNowSingleCallback);

title = uicontrol("Style", "text", "String", "The Girl Phone Code");
set(title, "Position", [((screenX / 2) - 120), (screenY - 170), 240, 80]);
