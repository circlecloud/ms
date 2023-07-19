for PACKAGE in `ls packages`;do
    echo "${PACKAGE} $(curl -s "https://registry-direct.npmmirror.com/@ccms/${PACKAGE}/sync?sync_upstream=true" -X 'PUT')"
done
