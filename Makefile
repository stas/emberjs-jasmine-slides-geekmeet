# ./Makefile

# ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###

ECHOCMD:=/bin/echo -e
PDFLATEX:=xelatex -shell-escape

# ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###

TARGET:=slides

# ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###
# 

default: main

main:
	@$(PDFLATEX) $(TARGET)

romanian:
	@$(PDFLATEX) $(TARGET)-romanian

.PHONY: clean

clean:
	@rm -f $(TARGET)*.aux \
	       $(TARGET)*.log \
	       $(TARGET)*.nav \
	       $(TARGET)*.out \
	       $(TARGET)*.snm \
	       $(TARGET)*.toc \
	       $(TARGET)*.vrb \
	       $(TARGET)*.pdf \
	       $(TARGET)*.dvi \
	       $(TARGET)*.ps  \
	       $(TARGET)*.bbl \
	       $(TARGET)*.blg \
	       $(TARGET)*.thm \
	       $(TARGET)*.brf \
	       $(TARGET)*.pyg \
	       missfont.log  \
	       x.log
	@rm -f *~
