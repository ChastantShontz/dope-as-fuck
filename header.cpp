#ifndef _HEADER_
#define _HEADER_

#include <iostream>
#include <iomanip>
#include <sstream>
#include <fstream>
#include <string>
#include <cctype>
#include <cmath>
#include <random>
#include <limits>
#include <algorithm>
#include <utility>
#include <regex>
#include <ctime>
#include <chrono>
#include <iterator>
#include <vector>
#include <list>
#include <initializer_list>
#include <map>
#include <unordered_map>
#include <set>
#include <unordered_set>
#include <cstdlib>
using namespace std;

namespace user {
  class User {
    public:
      User(string n, string y, string m, string h, string i, int ssn) : name(n),
                                                                        year(y),
                                                                        major(m),
                                                                        hometown(h),
                                                                        instrument(i),
                                                                        socialSecurityNumber(ssn) {}

      User() : User("undefined", "undefined", "undefined", "undefined", "undefined", 0) {}

      User(string n) : User(n, "undefined", "undefined", "undefined", "undefined", 0) {}

      User(int ssn) : User("undefined", "undefined", "undefined", "undefined", "undefined", ssn) {}

      User(string n, int ssn) : User(n, "undefined", "undefined", "undefined", "undefined", ssn) {}

      User(string n, string y, string m, string h, string i) : User(n, y, m, h, i, 0) {}

      User(string n, string y, string m, string h, string i, string ssn) : User(n, y, m, h, i, stoi(ssn)) {}

      User(string a[]) : User(a[0], a[1], a[2], a[3], a[4], stoi(a[5])) {}

      User(vector<string> v) : User(v[0], v[1], v[2], v[3], v[4], stoi(v[5])) {}

      User(std::list<string> l) : User(*(l.begin()), *(++l.begin()), *(++(++l.begin())), *(++(++(++l.begin()))), *(++(++(++(++l.begin())))), stoi(*(++(++(++(++(++l.begin()))))))) {}

      User(initializer_list<string> il) : User(*(il.begin()), *(il.begin() + 1), *(il.begin() + 2), *(il.begin() + 3), *(il.begin() + 4), stoi(*(il.begin() + 5))) {}

      User(map<string, string> m) : User(m["name"], m["year"], m["major"], m["hometown"], m["instrument"], stoi(m["socialSecurityNumber"])) {}

      User(unordered_map<string, string> um) : User(um["name"], um["year"], um["major"], um["hometown"], um["instrument"], stoi(um["socialSecurityNumber"])) {}

      User(unordered_set<string> us) : User(*(us.begin()), *(++us.begin()), *(++(++us.begin())), *(++(++(++us.begin()))), *(++(++(++(++us.begin())))), stoi(*(++(++(++(++(++us.begin()))))))) {}

      User(unordered_multiset<string> um) : User(*(um.begin()), *(++um.begin()), *(++(++um.begin())), *(++(++(++um.begin()))), *(++(++(++(++um.begin())))), stoi(*(++(++(++(++(++um.begin()))))))) {}

      ~User() {
        name = "";
        year = "";
        major = "";
        hometown = "";
        instrument = "";
        socialSecurityNumber = 0;
      }

      void setName(string n = "undefined") {
        name = n;
      }

      void setYear(string y = "undefined") {
        year = y;
      }

      void setMajor(string m = "undefined") {
        major = m;
      }

      void setHometown(string h = "undefined") {
        hometown = h;
      }

      void setInstrument(string i = "undefined") {
        instrument = i;
      }

      void setSocialSecurityNumber(int ssn = 0) {
        socialSecurityNumber = ssn;
      }

      void setAll(string n = "undefined", string y = "undefined", string m = "undefined", string h = "undefined", string i = "undefined", int ssn = 0) {
        setName(n);
        setYear(y);
        setMajor(m);
        setHometown(h);
        setInstrument(i);
        setSocialSecurityNumber(ssn);
      }

      string getName() const {
        return name;
      }

      string getYear() const {
        return year;
      }

      string getMajor() const {
        return major;
      }

      string getHometown() const {
        return hometown;
      }

      string getInstrument() const {
        return instrument;
      }

      int getSocialSecurityNumber() const {
        return socialSecurityNumber;
      }

      template <typename T = char>
      string getAll(const T& joiner = ' ') const {
        string all = getName() + joiner + getYear() + joiner + getMajor() + joiner + getHometown() + joiner + getInstrument() + joiner + to_string(getSocialSecurityNumber());
        return all;
      }

      bool matchName(const string& n) const {
        bool match;
        if (n == getName()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchYear(const string& y) const {
        bool match;
        if (y == getYear()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchMajor(const string& m) const {
        bool match;
        if (m == getMajor()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchHometown(const string& h) const {
        bool match;
        if (h == getHometown()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchInstrument(const string& i) const {
        bool match;
        if (i == getInstrument()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchSocialSecurityNumber(const int& ssn) const {
        bool match;
        if (ssn == getSocialSecurityNumber()) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      bool matchAll(const string& n, const string& y, const string& m, const string& h, const string& i, const int& ssn) const {
        bool match;
        if ((matchName(n) == true) && (matchYear(y) == true) && (matchMajor(m) == true) && (matchHometown(h) == true) && (matchInstrument(i) == true) && (matchSocialSecurityNumber(ssn) == true)) {
          match = true;
        }
        else {
          match = false;
        }
        return match;
      }

      void replaceName(const string& r, const string& n) {
        if (matchName(r)) {
          setName(n);
        }
      }

      void replaceYear(const string& r, const string& y) {
        if (matchYear(r)) {
          setYear(y);
        }
      }

      void replaceMajor(const string& r, const string& m) {
        if (matchMajor(r)) {
          setMajor(m);
        }
      }

      void replaceHometown(const string& r, const string& h) {
        if (matchHometown(r)) {
          setHometown(h);
        }
      }

      void replaceInstrument(const string& r, const string& i) {
        if (matchInstrument(r)) {
          setInstrument(i);
        }
      }

      void replaceSocialSecurityNumber(const int& r, const int& ssn) {
        if (matchSocialSecurityNumber(r)) {
          setSocialSecurityNumber(ssn);
        }
      }

      void clearName() {
        setName("undefined");
      }

      void clearYear() {
        setYear("undefined");
      }

      void clearMajor() {
        setMajor("undefined");
      }

      void clearHometown() {
        setHometown("undefined");
      }

      void clearInstrument() {
        setInstrument("undefined");
      }

      void clearSocialSecurityNumber() {
        setSocialSecurityNumber(0);
      }

      void clearAll() {
        clearName();
        clearYear();
        clearMajor();
        clearHometown();
        clearInstrument();
        clearSocialSecurityNumber();
      }

      string toString() const {
        string s = getAll();
        return s;
      }

      bool toBool() const {
        bool b;
        if ((getName() == "undefined") && (getYear() == "undefined") && (getMajor() == "undefined") && (getHometown() == "undefined") && (getInstrument() == "undefined") && (getSocialSecurityNumber() == 0)) {
          b = false;
        }
        else {
          b = true;
        }
        return b;
      }

      string* toArray() const {
        static string a[5];
        a[0] = getName();
        a[1] = getYear();
        a[2] = getMajor();
        a[3] = getHometown();
        a[4] = getInstrument();
        a[5] = to_string(getSocialSecurityNumber());
        return a;
      }

      vector<string> toVector() const {
        vector<string> v;
        v.push_back(getName());
        v.push_back(getYear());
        v.push_back(getMajor());
        v.push_back(getHometown());
        v.push_back(getInstrument());
        v.push_back(to_string(getSocialSecurityNumber()));
        return v;
      }

      std::list<string> toList() const {
        std::list<string> l;
        l.push_back(getName());
        l.push_back(getYear());
        l.push_back(getMajor());
        l.push_back(getHometown());
        l.push_back(getInstrument());
        l.push_back(to_string(getSocialSecurityNumber()));
        return l;
      }

      initializer_list<string> toInitializerList() const {
        initializer_list<string> il = {
          getName(),
          getYear(),
          getMajor(),
          getHometown(),
          getInstrument(),
          to_string(getSocialSecurityNumber())
        };
        return il;
      }

      map<string, string> toMap() const {
        map<string, string> m;
        m["name"] = getName();
        m["year"] = getYear();
        m["major"] = getMajor();
        m["hometown"] = getHometown();
        m["instrument"] = getInstrument();
        m["socialSecurityNumber"] = to_string(getSocialSecurityNumber());
        return m;
      }

      unordered_map<string, string> toUnorderedMap() const {
        unordered_map<string, string> um;
        um["name"] = getName();
        um["year"] = getYear();
        um["major"] = getMajor();
        um["hometown"] = getHometown();
        um["instrument"] = getInstrument();
        um["socialSecurityNumber"] = to_string(getSocialSecurityNumber());
        return um;
      }

      std::set<string> toSet() const {
        std::set<string> s;
        s.insert(getName());
        s.insert(getYear());
        s.insert(getMajor());
        s.insert(getHometown());
        s.insert(getInstrument());
        s.insert(to_string(getSocialSecurityNumber()));
        return s;
      }

      std::set<string, greater<string>> toAscendingSet() const {
        std::set<string, greater<string>> as;
        as.insert(getName());
        as.insert(getYear());
        as.insert(getMajor());
        as.insert(getHometown());
        as.insert(getInstrument());
        as.insert(to_string(getSocialSecurityNumber()));
        return as;
      }

      unordered_set<string> toUnorderedSet() const {
        unordered_set<string> us;
        us.insert(getName());
        us.insert(getYear());
        us.insert(getMajor());
        us.insert(getHometown());
        us.insert(getInstrument());
        us.insert(to_string(getSocialSecurityNumber()));
        return us;
      }

      multiset<string> toMultiset() const {
        multiset<string> m;
        m.insert(getName());
        m.insert(getYear());
        m.insert(getMajor());
        m.insert(getHometown());
        m.insert(getInstrument());
        m.insert(to_string(getSocialSecurityNumber()));
        return m;
      }

      multiset<string, greater<string>> toAscendingMultiset() const {
        multiset<string, greater<string>> am;
        am.insert(getName());
        am.insert(getYear());
        am.insert(getMajor());
        am.insert(getHometown());
        am.insert(getInstrument());
        am.insert(to_string(getSocialSecurityNumber()));
        return am;
      }

      unordered_multiset<string> toUnorderedMultiset() const {
        unordered_multiset<string> um;
        um.insert(getName());
        um.insert(getYear());
        um.insert(getMajor());
        um.insert(getHometown());
        um.insert(getInstrument());
        um.insert(to_string(getSocialSecurityNumber()));
        return um;
      }

      pair<User, User> toPair() const {
        User user1(getName(), getYear(), getMajor(), getHometown(), getInstrument(), getSocialSecurityNumber());
        User user2 = user1;
        pair<User, User> p;
        p.first = user1;
        p.second = user2;
        return p;
      }

      void displaySet(const int& count) const {
        system("cls");
        cout << endl << "\t-- USER #" << count << ((getName() == "undefined") ? ("") : (": " + getName())) << " --" << endl;
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
        cout << "  Which info would you like to set?" << endl << endl;
        cout << "  (N)ame  |  (Y)ear  |  (M)ajor  |  (I)nstrument" << endl << endl << "  (S)ocial Security Number  |  (A)ll  |  (C)ancel" << endl;
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
      }

      bool set(const int& count) {
        bool setCancel;
        bool setSuccess = false;
        char setCommand;
        displaySet(count);
        cout << "  ";
        while (setSuccess == false) {
          cin.get(setCommand);
          if ((setCommand == '\n') || (cin.peek() == '\n')) {
            if (setCommand != '\n') {
              cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            setCommand = tolower(setCommand);
            if ((setCommand == 'n') || (setCommand == 'y') || (setCommand == 'm') || (setCommand == 'h') || (setCommand == 'i') || (setCommand == 's') || (setCommand == 'a') || (setCommand == 'c')) {
              setSuccess = true;
              if ((setCommand == 'n') || (setCommand == 'y') || (setCommand == 'm') || (setCommand == 'h') || (setCommand == 'i') || (setCommand == 's') || (setCommand == 'a')) {
                if ((setCommand == 'n') || setCommand == 'a') {
                  bool testName = false;
                  cout << endl << "  Name: ";
                  while (testName == false) {
                    getline(cin, name);
                    if (getName() == "undefined") {
                      cout << "  Null value, try again: ";
                    }
                    else if ((getName() == " ") || (getName() == "")) {
                      cout << "  Empty string, try again: ";
                    }
                    else {
                      testName = true;
                    }
                  }
                }
                if ((setCommand == 'y') || setCommand == 'a') {
                  bool testYear = false;
                  cout << endl << "  Year: ";
                  while (testYear == false) {
                    getline(cin, year);
                    if (getYear() == "undefined") {
                      cout << "  Null value, try again: ";
                    }
                    else if ((getYear() == " ") || (getYear() == "")) {
                      cout << "  Empty string, try again: ";
                    }
                    else {
                      testYear = true;
                    }
                  }
                }
                if ((setCommand == 'm') || setCommand == 'a') {
                  bool testMajor = false;
                  cout << endl << "  Major: ";
                  while (testMajor == false) {
                    getline(cin, major);
                    if (getMajor() == "undefined") {
                      cout << "  Null value, try again: ";
                    }
                    else if ((getMajor() == " ") || (getMajor() == "")) {
                      cout << "  Empty string, try again: ";
                    }
                    else {
                      testMajor = true;
                    }
                  }
                }
                if ((setCommand == 'h') || setCommand == 'a') {
                  bool testHometown = false;
                  cout << endl << "  Hometown: ";
                  while (testHometown == false) {
                    getline(cin, hometown);
                    if (getHometown() == "undefined") {
                      cout << "  Null value, try again: ";
                    }
                    else if ((getHometown() == " ") || (getHometown() == "")) {
                      cout << "  Empty string, try again: ";
                    }
                    else {
                      testHometown = true;
                    }
                  }
                }
                if ((setCommand == 'i') || setCommand == 'a') {
                  bool testInstrument = false;
                  cout << endl << "  Instrument: ";
                  while (testInstrument == false) {
                    getline(cin, instrument);
                    if (getInstrument() == "undefined") {
                      cout << "  Null value, try again: ";
                    }
                    else if ((getInstrument() == " ") || (getInstrument() == "")) {
                      cout << "  Empty string, try again: ";
                    }
                    else {
                      testInstrument = true;
                    }
                  }
                }
                if ((setCommand == 's') || setCommand == 'a') {
                  bool testSocialSecurityNumber = false;
                  cout << endl << "  Social Security Number: ";
                  while (testSocialSecurityNumber == false) {
                    if (cin >> socialSecurityNumber) {
                      cin.ignore(numeric_limits<streamsize>::max(), '\n');
                      int digits = (log10(getSocialSecurityNumber()) + 1);
                      if ((getSocialSecurityNumber() > 0) && (digits <= 9)) {
                        testSocialSecurityNumber = true;
                      }
                      else {
                        cout << "  Invalid number, try again: ";
                      }
                    }
                    else {
                      cout << "  Not a number, try again: ";
                      cin.clear();
                      cin.ignore(numeric_limits<streamsize>::max(), '\n');
                    }
                  }
                }
                setCancel = false;
              }
              else if (setCommand == 'c') {
                setCancel = true;
              }
            }
            else {
              cout << "  Unknown command, try again: ";
            }
          }
          else {
            cout << "  Too many characters, try again: ";
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
          }
        }
        return setCancel;
      }

      void displayPrint(const int& count, const bool& printSuccess) const {
        system("cls");
        cout << endl << "\t-- USER #" << count << ((getName() == "undefined") ? ("") : (": " + getName())) << " --" << endl;
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
        if (printSuccess == true) {
          cout << "  (S)et info  |  (P)rint info" << endl << endl << "  (C)lear info  |  (E)nd" << endl;
        }
        else if (printSuccess == false) {
          cout << "  Which info would you like to print?" << endl << endl;
          cout << "  (N)ame  |  (Y)ear  |  (M)ajor  |  (I)nstrument" << endl << endl << "  (S)ocial Security Number  |  (A)ll  |  (C)ancel" << endl;
        }
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
      }

      bool print(const int& count) const {
        bool printCancel;
        bool printSuccess = false;
        char printCommand;
        displayPrint(count, printSuccess);
        cout << "  ";
        while (printSuccess == false) {
          cin.get(printCommand);
          if ((printCommand == '\n') || (cin.peek() == '\n')) {
            if (printCommand != '\n') {
              cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            printCommand = tolower(printCommand);
            if ((printCommand == 'n') || (printCommand == 'y') || (printCommand == 'm') || (printCommand == 'h') || (printCommand == 'i') || (printCommand == 's') || (printCommand == 'a') || (printCommand == 'c')) {
              printSuccess = true;
              displayPrint(count, printSuccess);
              if ((printCommand == 'n') || (printCommand == 'y') || (printCommand == 'm') || (printCommand == 'h') || (printCommand == 'i') || (printCommand == 's') || (printCommand == 'a')) {
                if ((printCommand == 'n') || printCommand == 'a') {
                  cout << "  Name: " << getName() << endl;
                }
                if ((printCommand == 'y') || printCommand == 'a') {
                  cout << "  Year: " << getYear() << endl;
                }
                if ((printCommand == 'm') || printCommand == 'a') {
                  cout << "  Major: " << getMajor() << endl;
                }
                if ((printCommand == 'h') || printCommand == 'a') {
                  cout << "  Hometown: " << getHometown() << endl;
                }
                if ((printCommand == 'i') || printCommand == 'a') {
                  cout << "  Instrument: " << getInstrument() << endl;
                }
                if ((printCommand == 's') || printCommand == 'a') {
                  cout << "  Social Security Number: " << setw(9) << setfill('0') << getSocialSecurityNumber() << endl;
                }
                cout << endl << "  ";
                printCancel = false;
              }
              else if (printCommand == 'c') {
                printCancel = true;
              }
            }
            else {
              cout << "  Unknown command, try again: ";
            }
          }
          else {
            cout << "  Too many characters, try again: ";
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
          }
        }
        return printCancel;
      }

      void displayClear(const int& count) const {
        system("cls");
        cout << endl << "\t-- USER #" << count << ((getName() == "undefined") ? ("") : (": " + getName())) << " --" << endl;
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
        cout << "  Which info would you like to clear?" << endl << endl;
        cout << "  (N)ame  |  (Y)ear  |  (M)ajor  |  (I)nstrument" << endl << endl << "  (S)ocial Security Number  |  (A)ll  |  (C)ancel" << endl;
        cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
      }

      bool clear(const int& count) {
        bool clearCancel;
        bool clearSuccess = false;
        char clearCommand;
        displayClear(count);
        cout << "  ";
        while (clearSuccess == false) {
          cin.get(clearCommand);
          if ((clearCommand == '\n') || (cin.peek() == '\n')) {
            if (clearCommand != '\n') {
              cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            clearCommand = tolower(clearCommand);
            if ((clearCommand == 'n') || (clearCommand == 'y') || (clearCommand == 'm') || (clearCommand == 'h') || (clearCommand == 'i') || (clearCommand == 's') || (clearCommand == 'a') || (clearCommand == 'c')) {
              clearSuccess = true;
              if ((clearCommand == 'n') || (clearCommand == 'y') || (clearCommand == 'm') || (clearCommand == 'h') || (clearCommand == 'i') || (clearCommand == 's') || (clearCommand == 'a')) {
                if ((clearCommand == 'n') || clearCommand == 'a') {
                  clearName();
                }
                if ((clearCommand == 'y') || clearCommand == 'a') {
                  clearYear();
                }
                if ((clearCommand == 'm') || clearCommand == 'a') {
                  clearMajor();
                }
                if ((clearCommand == 'h') || clearCommand == 'a') {
                  clearHometown();
                }
                if ((clearCommand == 'i') || clearCommand == 'a') {
                  clearInstrument();
                }
                if ((clearCommand == 's') || clearCommand == 'a') {
                  clearSocialSecurityNumber();
                }
                clearCancel = false;
              }
              else if (clearCommand == 'c') {
                clearCancel = true;
              }
            }
            else {
              cout << "  Unknown command, try again: ";
            }
          }
          else {
            cout << "  Too many characters, try again: ";
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
          }
        }
        return clearCancel;
      }

      User copy() const {
        User copy(getName(), getYear(), getMajor(), getHometown(), getInstrument(), getSocialSecurityNumber());
        return copy;
      }

      bool empty() const {
        bool empty;
        if (toBool() == true) {
          empty = false;
        }
        else {
          empty = true;
        }
        return empty;
      }

      bool filled() const {
        bool filled;
        if ((getName() == "undefined") || (getYear() == "undefined") || (getMajor() == "undefined") || (getHometown() == "undefined") || (getInstrument() == "undefined") || (getSocialSecurityNumber() == 0)) {
          filled = false;
        }
        else {
          filled = true;
        }
        return filled;
      }

      string operator [] (const string& key) {
        if (key == "name") {
          return getName();
        }
        else if (key == "year") {
          return getYear();
        }
        else if (key == "major") {
          return getMajor();
        }
        else if (key == "hometown") {
          return getHometown();
        }
        else if (key == "instrument") {
          return getInstrument();
        }
        else if (key == "socialSecurityNumber") {
          return to_string(getSocialSecurityNumber());
        }
      }

      const string operator [] (const string& key) const {
        if (key == "name") {
          return getName();
        }
        else if (key == "year") {
          return getYear();
        }
        else if (key == "major") {
          return getMajor();
        }
        else if (key == "hometown") {
          return getHometown();
        }
        else if (key == "instrument") {
          return getInstrument();
        }
        else if (key == "socialSecurityNumber") {
          return to_string(getSocialSecurityNumber());
        }
      }

      void operator = (const User& source) {
        setAll(source.getName(), source.getYear(), source.getMajor(), source.getHometown(), source.getInstrument(), source.getSocialSecurityNumber());
      }

      void operator += (const User& addend) {
        *this = (*this + addend);
      }

      void operator -= (const User& subtrahend) {
        *this = (*this - subtrahend);
      }

      friend void replace(User& user1, User& user2) {
        user1  = user2;
      }

      friend void swap(User& user1, User& user2) {
        User temp(user1.getName(), user1.getYear(), user1.getMajor(), user1.getHometown(), user1.getInstrument(), user1.getSocialSecurityNumber());
        user1 = user2;
        user2 = temp;
      }

      friend User concat(User& user1, User& user2) {
        User sum = (user1 + user2);
        return sum;
      }

      friend User trim(User& user1, User& user2) {
        User difference = (user1 - user2);
        return difference;
      }

      friend User max(const User& user1, const User& user2) {
        if (user1 < user2) {
          return user2;
        }
        else if (user1 >= user2) {
          return user1;
        }
      }

      friend User min(const User& user1, const User& user2) {
        if (user1 <= user2) {
          return user1;
        }
        else if (user1 > user2) {
          return user2;
        }
      }

      friend User average(const User& user1, const User& user2) {
        User average;
        if (user1 == user2) {
          average = user1;
        }
        else {
          srand(time(0) * ((rand() % ((2 - 1) + 1)) + 1));
          if ((user1.getName() == user2.getName())) {
            average.setName(user1.getName());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setName(user1.getName());
            }
            else if (random == 2) {
              average.setName(user2.getName());
            }
          }
          if ((user1.getYear() == user2.getYear())) {
            average.setYear(user1.getYear());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setYear(user1.getYear());
            }
            else if (random == 2) {
              average.setYear(user2.getYear());
            }
          }
          if ((user1.getMajor() == user2.getMajor())) {
            average.setMajor(user1.getMajor());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setMajor(user1.getMajor());
            }
            else if (random == 2) {
              average.setMajor(user2.getMajor());
            }
          }
          if ((user1.getHometown() == user2.getHometown())) {
            average.setHometown(user1.getHometown());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setHometown(user1.getHometown());
            }
            else if (random == 2) {
              average.setHometown(user2.getHometown());
            }
          }
          if ((user1.getInstrument() == user2.getInstrument())) {
            average.setInstrument(user1.getInstrument());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setInstrument(user1.getInstrument());
            }
            else if (random == 2) {
              average.setInstrument(user2.getInstrument());
            }
          }
          if ((user1.getSocialSecurityNumber() == user2.getSocialSecurityNumber())) {
            average.setSocialSecurityNumber(user1.getSocialSecurityNumber());
          }
          else {
            int random = ((rand() % ((2 - 1) + 1)) + 1);
            if (random == 1) {
              average.setSocialSecurityNumber(user1.getSocialSecurityNumber());
            }
            else if (random == 2) {
              average.setSocialSecurityNumber(user2.getSocialSecurityNumber());
            }
          }
        }
        return average;
      }

      friend pair<User, User> toPair(const User& user1, const User& user2) {
        pair<User, User> p;
        p.first = user1;
        p.second = user2;
        return p;
      }

      friend istream& operator >> (istream& in, User& user) {
        bool testName = false;
        while (testName == false) {
          getline(in, user.name);
          if (user.getName() == "undefined") {
            cout << "  Null value, try again: ";
          }
          else if ((user.getName() == " ") || (user.getName() == "")) {
            cout << "  Empty string, try again: ";
          }
          else {
            testName = true;
          }
        }
        bool testYear = false;
        while (testYear == false) {
          getline(in, user.year);
          if (user.getYear() == "undefined") {
            cout << "  Null value, try again: ";
          }
          else if ((user.getYear() == " ") || (user.getYear() == "")) {
            cout << "  Empty string, try again: ";
          }
          else {
            testYear = true;
          }
        }
        bool testMajor = false;
        while (testMajor == false) {
          getline(in, user.major);
          if (user.getMajor() == "undefined") {
            cout << "  Null value, try again: ";
          }
          else if ((user.getMajor() == " ") || (user.getMajor() == "")) {
            cout << "  Empty string, try again: ";
          }
          else {
            testMajor = true;
          }
        }
        bool testHometown = false;
        while (testHometown == false) {
          getline(in, user.hometown);
          if (user.getHometown() == "undefined") {
            cout << "  Null value, try again: ";
          }
          else if ((user.getHometown() == " ") || (user.getHometown() == "")) {
            cout << "  Empty string, try again: ";
          }
          else {
            testHometown = true;
          }
        }
        bool testInstrument = false;
        while (testInstrument == false) {
          getline(in, user.instrument);
          if (user.getInstrument() == "undefined") {
            cout << "  Null value, try again: ";
          }
          else if ((user.getInstrument() == " ") || (user.getInstrument() == "")) {
            cout << "  Empty string, try again: ";
          }
          else {
            testInstrument = true;
          }
        }
        bool testSocialSecurityNum = false;
        while (testSocialSecurityNum == false) {
          if (cin >> user.socialSecurityNumber) {
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            int digits = (log10(user.getSocialSecurityNumber()) + 1);
            if ((user.getSocialSecurityNumber() > 0) && (digits <= 9)) {
              testSocialSecurityNum = true;
            }
            else {
              cout << "  Invalid number, try again: ";
            }
          }
          else {
            cout << "  Not a number, try again: ";
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
          }
        }
        return in;
      }

      friend ostream& operator << (ostream& out, const User& user) {
        out << user.getAll();
        return out;
      }

      friend bool operator == (const User& user1, const User& user2) {
        bool equals;
        if ((user1.getName() == user2.getName()) && (user1.getYear() == user2.getYear()) && (user1.getMajor() == user2.getMajor()) && (user1.getHometown() == user2.getHometown()) && (user1.getInstrument() == user2.getInstrument()) && (user1.getSocialSecurityNumber() == user2.getSocialSecurityNumber())) {
          equals = true;
        }
        else {
          equals = false;
        }
        return equals;
      }

      friend bool operator != (const User& user1, const User& user2) {
        bool notEquals;
        if ((user1.getName() == user2.getName()) && (user1.getYear() == user2.getYear()) && (user1.getMajor() == user2.getMajor()) && (user1.getHometown() == user2.getHometown()) && (user1.getInstrument() == user2.getInstrument()) && (user1.getSocialSecurityNumber() == user2.getSocialSecurityNumber())) {
          notEquals = false;
        }
        else {
          notEquals = true;
        }
        return notEquals;
      }

      friend bool operator >= (const User& user1, const User& user2) {
        bool greaterEquals;
        if (((user1.getName() < user2.getName()) && (user2.getName() != "undefined")) || ((user1.getName() == "undefined") || (user2.getName() != "undefined"))) {
          greaterEquals = false;
        }
        else if (user1.getName() == user2.getName()) {
          int fields1 = 1;
          int fields2 = 1;
          if (user1.getYear() != "undefined") {
            fields1++;
          }
          if (user1.getMajor() != "undefined") {
            fields1++;
          }
          if (user1.getHometown() != "undefined") {
            fields1++;
          }
          if (user1.getInstrument() != "undefined") {
            fields1++;
          }
          if (user1.getSocialSecurityNumber() > 0) {
            fields1++;
          }
          if (user2.getYear() != "undefined") {
            fields2++;
          }
          if (user2.getMajor() != "undefined") {
            fields2++;
          }
          if (user2.getHometown() != "undefined") {
            fields2++;
          }
          if (user2.getInstrument() != "undefined") {
            fields2++;
          }
          if (user2.getSocialSecurityNumber() > 0) {
            fields2++;
          }
          if (fields1 < fields2) {
            greaterEquals = false;
          }
          else if (fields1 >= fields2) {
            greaterEquals = true;
          }
        }
        else if (((user1.getName() > user2.getName()) && (user1.getName() != "undefined")) || ((user1.getName() != "undefined") && (user2.getName() == "undefined"))) {
          greaterEquals = true;
        }
        return greaterEquals;
      }

      friend bool operator <= (const User& user1, const User& user2) {
        bool lessEquals;
        if (((user1.getName() < user2.getName()) && (user2.getName() != "undefined")) || ((user1.getName() == "undefined") && (user2.getName() != "undefined"))) {
          lessEquals = true;
        }
        else if (user1.getName() == user2.getName()) {
          int fields1 = 1;
          int fields2 = 1;
          if (user1.getYear() != "undefined") {
            fields1++;
          }
          if (user1.getMajor() != "undefined") {
            fields1++;
          }
          if (user1.getHometown() != "undefined") {
            fields1++;
          }
          if (user1.getInstrument() != "undefined") {
            fields1++;
          }
          if (user1.getSocialSecurityNumber() > 0) {
            fields1++;
          }
          if (user2.getYear() != "undefined") {
            fields2++;
          }
          if (user2.getMajor() != "undefined") {
            fields2++;
          }
          if (user2.getHometown() != "undefined") {
            fields2++;
          }
          if (user2.getInstrument() != "undefined") {
            fields2++;
          }
          if (user2.getSocialSecurityNumber() > 0) {
            fields2++;
          }
          if (fields1 <= fields2) {
            lessEquals = true;
          }
          else if (fields1 > fields2) {
            lessEquals = false;
          }
        }
        else if (((user1.getName() > user2.getName()) && (user1.getName() != "undefined")) || ((user1.getName() != "undefined") || (user2.getName() == "undefined"))) {
          lessEquals = false;
        }
        return lessEquals;
      }

      friend bool operator > (const User& user1, const User& user2) {
        bool greater;
        if (((user1.getName() < user2.getName()) && (user2.getName() != "undefined")) || ((user1.getName() == "undefined") || (user2.getName() != "undefined"))) {
          greater = false;
        }
        else if (user1.getName() == user2.getName()) {
          int fields1 = 1;
          int fields2 = 1;
          if (user1.getYear() != "undefined") {
            fields1++;
          }
          if (user1.getMajor() != "undefined") {
            fields1++;
          }
          if (user1.getHometown() != "undefined") {
            fields1++;
          }
          if (user1.getInstrument() != "undefined") {
            fields1++;
          }
          if (user1.getSocialSecurityNumber() > 0) {
            fields1++;
          }
          if (user2.getYear() != "undefined") {
            fields2++;
          }
          if (user2.getMajor() != "undefined") {
            fields2++;
          }
          if (user2.getHometown() != "undefined") {
            fields2++;
          }
          if (user2.getInstrument() != "undefined") {
            fields2++;
          }
          if (user2.getSocialSecurityNumber() > 0) {
            fields2++;
          }
          if (fields1 <= fields2) {
            greater = false;
          }
          else if (fields1 > fields2) {
            greater = true;
          }
        }
        else if (((user1.getName() > user2.getName()) && (user1.getName() != "undefined")) || ((user1.getName() != "undefined") && (user2.getName() == "undefined"))) {
          greater = true;
        }
        return greater;
      }

      friend bool operator < (const User& user1, const User& user2) {
        bool less;
        if (((user1.getName() < user2.getName()) && (user2.getName() != "undefined")) || ((user1.getName() == "undefined") && (user2.getName() != "undefined"))) {
          less = true;
        }
        else if (user1.getName() == user2.getName()) {
          int fields1 = 1;
          int fields2 = 1;
          if (user1.getYear() != "undefined") {
            fields1++;
          }
          if (user1.getMajor() != "undefined") {
            fields1++;
          }
          if (user1.getHometown() != "undefined") {
            fields1++;
          }
          if (user1.getInstrument() != "undefined") {
            fields1++;
          }
          if (user1.getSocialSecurityNumber() > 0) {
            fields1++;
          }
          if (user2.getYear() != "undefined") {
            fields2++;
          }
          if (user2.getMajor() != "undefined") {
            fields2++;
          }
          if (user2.getHometown() != "undefined") {
            fields2++;
          }
          if (user2.getInstrument() != "undefined") {
            fields2++;
          }
          if (user2.getSocialSecurityNumber() > 0) {
            fields2++;
          }
          if (fields1 < fields2) {
            less = true;
          }
          else if (fields1 >= fields2) {
            less = false;
          }
        }
        else if (((user1.getName() > user2.getName()) && (user1.getName() != "undefined")) || ((user1.getName() != "undefined") || (user2.getName() == "undefined"))) {
          less = false;
        }
        return less;
      }

      friend User operator + (const User& user1, const User& user2) {
        User sum = user1;
        if ((sum.getName() == "undefined") && (user2.getName() != "undefined")) {
          sum.setName(user2.getName());
        }
        if ((sum.getYear() == "undefined") && (user2.getYear() != "undefined")) {
          sum.setYear(user2.getYear());
        }
        if ((sum.getMajor() == "undefined") && (user2.getMajor() != "undefined")) {
          sum.setMajor(user2.getMajor());
        }
        if ((sum.getHometown() == "undefined") && (user2.getHometown() != "undefined")) {
          sum.setHometown(user2.getHometown());
        }
        if ((sum.getInstrument() == "undefined") && (user2.getInstrument() != "undefined")) {
          sum.setInstrument(user2.getInstrument());
        }
        if ((sum.getSocialSecurityNumber() == 0) && (user2.getSocialSecurityNumber() > 0)) {
          sum.setSocialSecurityNumber(user2.getSocialSecurityNumber());
        }
        return sum;
      }

      friend User operator - (const User& user1, const User& user2) {
        User difference = user1;
        if ((difference.getName() != "undefined") && (user2.getName() == "undefined")) {
          difference.clearName();
        }
        if ((difference.getYear() != "undefined") && (user2.getYear() == "undefined")) {
          difference.clearYear();
        }
        if ((difference.getMajor() != "undefined") && (user2.getMajor() == "undefined")) {
          difference.clearMajor();
        }
        if ((difference.getHometown() != "undefined") && (user2.getHometown() == "undefined")) {
          difference.clearHometown();
        }
        if ((difference.getInstrument() != "undefined") && (user2.getInstrument() == "undefined")) {
          difference.clearInstrument();
        }
        if ((difference.getSocialSecurityNumber() > 0) && (user2.getSocialSecurityNumber() == 0)) {
          difference.clearSocialSecurityNumber();
        }
        return difference;
      }
    private:
      string name;
      string year;
      string major;
      string hometown;
      string instrument;
      int socialSecurityNumber;
  };

  void startTimer(chrono::steady_clock::time_point& start) {
    start = chrono::high_resolution_clock::now();
  }

  void display(const User& you, const int& count) {
    system("cls");
    cout << endl << "\t-- USER #" << count << ((you.getName() == "undefined") ? ("") : (": " + you.getName())) << " --" << endl;
    cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
    cout << "  (S)et info  |  (P)rint info" << endl << endl << "  (C)lear info  |  (E)nd" << endl;
    cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
  }

  void controls(User& you, int& count, stringstream& ss) {
    count++;
    ss << you;
    bool cancel;
    bool controlsMore = true;
    char controlsCommand;
    display(you, count);
    cout << "  ";
    while (controlsMore == true) {
      bool controlsSuccess = false;
      while (controlsSuccess == false) {
        cin.get(controlsCommand);
        if ((controlsCommand == '\n') || (cin.peek() == '\n')) {
          if (controlsCommand != '\n') {
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
          }
          controlsCommand = tolower(controlsCommand);
          if ((controlsCommand == 's') || (controlsCommand == 'p') || (controlsCommand == 'c') || (controlsCommand == 'e')) {
            controlsSuccess = true;
            if ((controlsCommand == 's') || (controlsCommand == 'p') || (controlsCommand == 'c')) {
              if (controlsCommand == 's') {
                cancel = you.set(count);
                ss << you;
                display(you, count);
                if (cancel == true) {
                  cout << "  Action aborted" << endl << endl << "  ";
                }
                else if (cancel == false) {
                  cout << "  User info saved" << endl << endl << "  ";
                }
              }
              else if (controlsCommand == 'p') {
                cancel = you.print(count);
                if (cancel == true) {
                  cout << "  Action aborted" << endl << endl << "  ";
                }
              }
              else if (controlsCommand == 'c') {
                cancel = you.clear(count);
                ss << you;
                display(you, count);
                if (cancel == true) {
                  cout << "  Action aborted" << endl << endl << "  ";
                }
                else if (cancel == false) {
                  cout << "  User info cleared" << endl << endl << "  ";
                }
              }
            }
            else if (controlsCommand == 'e') {
              controlsMore = false;
            }
          }
          else {
            cout << "  Unknown command, try again: ";
          }
        }
        else {
          cout << "  Too many characters, try again: ";
          cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
      }
    }
  }

  void store(User& you, vector<User>& users, int& count) {
    users.reserve(count);
    users.push_back(you);
    system("cls");
    cout << endl << "  User #" << count << ": " << endl << endl << "    " << you.getAll(", ") << endl;
    cout << endl << setw(50) << setfill('=') << '=' << endl << endl;
  }

  void another(bool& more, char& command) {
    cout << "  Would you like to add another user (y/n)? ";
    bool anotherSuccess = false;
    while (anotherSuccess == false) {
      cin.get(command);
      if ((command == '\n') || (cin.peek() == '\n')) {
        if (command != '\n') {
          cin.ignore(numeric_limits<streamsize>::max(), '\n');
        }
        command = tolower(command);
        if ((command == 'y') || (command == 'n')) {
          anotherSuccess = true;
          if (command == 'n') {
            more = false;
          }
        }
        else {
          cout << "  Invalid answer, try again: ";
        }
      }
      else {
        cout << "  Too many characters, try again: ";
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
      }
    }
  }

  void write(const vector<User>& users, const int& count, string& filename) {
    system("cls");
    bool testFilename = false;
    cout << "  Filename: ";
    while (testFilename == false) {
      getline(cin, filename);
      if ((filename == " ") || (filename == "")) {
        cout << "  Empty string, try again: ";
      }
      else {
        testFilename = true;
      }
    }
    while ((filename[0] == ' ') || (filename[filename.size() - 1] == ' ')) {
      if (filename[0] == ' ') {
        filename = filename.substr(1);
      }
      else if (filename[filename.size() - 1] == ' ') {
        filename = filename.substr(0, (filename.size() - 1));
      }
    }
    replace(filename.begin(), filename.end(), ' ', '-');
    initializer_list<char> special = {
      '"',
      '*',
      '>',
      '<',
      ':',
      '?',
      '/',
      '\\',
      '|',
      '\0',
      '\b',
      '\n',
      '\r',
      '\t',
      '\v',
      '\f',
      '\a'
    };
    for (initializer_list<char>::iterator i = special.begin(); i != special.end(); i++) {
      filename.erase(remove(filename.begin(), filename.end(), *i), filename.end());
    }
    if (filename.find(".txt") == string::npos) {
      filename = filename + ".txt";
    }
    ofstream out;
    out.open(filename);
    out << endl << "  Users:" << endl;
    for (int i = 0; i < users.size(); i++) {
      User them = users[i];
      out << endl << "    #" << (i + 1) << ": " << them << endl;
    }
    out.close();
  }

  void list(const vector<User>& users, const int& count, const string& filename) {
    system("cls");
    cout << endl << "  Users:" << endl;
    for (int i = 0; i < users.size(); i++) {
      User them = users[i];
      cout << endl << "    #" << (i + 1) << ": " << them << endl;
    }
    cout << endl << "  " << count << ' ' << ((count == 1) ? ("user") : ("users")) << " successfully written to \"" << filename << '"' << endl;
  }

  void endTimer(const chrono::steady_clock::time_point& start, chrono::steady_clock::time_point& stop) {
    stop = chrono::high_resolution_clock::now();
    chrono::duration<__int64, struct ratio<1, 1000>> duration = chrono::duration_cast<chrono::milliseconds>(stop - start);
    double seconds = (round(static_cast<double>(duration.count())) / 1000);
    cout << endl << "  (" << seconds << "s runtime)" << endl;
  }
}

int main() {
  chrono::steady_clock::time_point start;
  user::startTimer(start);
  vector<user::User> users;
  int count = 0;
  bool more = true;
  char command;
  string filename;
  while (more == true) {
    user::User you;
    stringstream ss;
    user::controls(you, count, ss);
    user::store(you, users, count);
    user::another(more, command);
  }
  user::write(users, count, filename);
  user::list(users, count, filename);
  chrono::steady_clock::time_point stop;
  user::endTimer(start, stop);
  return 0;
}

#endif
