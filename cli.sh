#!/bin/bash
SHELL_PREFIX="[FAAS-CLI]"
# Shell Base Script
set -e

c_red="\033[38;5;1m"
c_blue="\033[38;5;4m"
c_green="\033[38;5;2m"
c_reset="\033[0m"
c_yellow="\033[38;5;3m"

c_prefix="${c_blue}${SHELL_PREFIX}>>${c_reset}"

dateStr() {
    echo -e "[$(date '+%H:%M:%S')]"
}

info() {
    echo -e "${c_prefix}$(dateStr) ${*}"
}

warn() {
    echo -e "${c_prefix}$(dateStr) ${c_yellow}${*}${c_reset}"
}

error() {
    echo -e "${c_prefix}$(dateStr) ${c_red}${*}${c_reset}"
}
#====================
cd $(dirname $0)

# User Input Variable
action=

while [[ $# -gt 0 ]]; do
    case "$1" in
        -a)
            action="$2"
            shift
            ;;
        -*)
            echo "Illegal option $1"
            ;;
    esac
    shift $(( $# > 0 ? 1 : 0 ))
done

case "${action}" in
    undo)
        hash=$(git log -n 1 --format=format:%H)
        tag=$(git tag -l --contains=${hash})
        if [[ -z "${tag}" ]]; then
            error "last commit not have tag exit..."
            exit 0
        fi
        git reset HEAD^
        git tag -d ${tag}
        git push origin master -f
        git push origin :${tag}
        ;;
esac

