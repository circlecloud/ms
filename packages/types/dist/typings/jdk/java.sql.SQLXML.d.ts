// @ts-nocheck
declare namespace java {
    namespace sql {
        // @ts-ignore
        interface SQLXML {
            /**
             * This method closes this object and releases the resources that it held.
             * The SQL XML object becomes invalid and neither readable or writeable
             * when this method is called.
             * After <code>free</code> has been called, any attempt to invoke a
             * method other than <code>free</code> will result in a <code>SQLException</code>
             * being thrown.  If <code>free</code> is called multiple times, the subsequent
             * calls to <code>free</code> are treated as a no-op.
             */
            // @ts-ignore
             free(): void;
            /**
             * Retrieves the XML value designated by this SQLXML instance as a stream.
             * The bytes of the input stream are interpreted according to appendix F of the XML 1.0 specification.
             * The behavior of this method is the same as ResultSet.getBinaryStream()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not readable when this method is called and
             * may also become not writable depending on implementation.
             */
            // @ts-ignore
             getBinaryStream(): java.io.InputStream;
            /**
             * Retrieves a stream that can be used to write the XML value that this SQLXML instance represents.
             * The stream begins at position 0.
             * The bytes of the stream are interpreted according to appendix F of the XML 1.0 specification
             * The behavior of this method is the same as ResultSet.updateBinaryStream()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not writeable when this method is called and
             * may also become not readable depending on implementation.
             */
            // @ts-ignore
             setBinaryStream(): java.io.OutputStream;
            /**
             * Retrieves the XML value designated by this SQLXML instance as a java.io.Reader object.
             * The format of this stream is defined by org.xml.sax.InputSource,
             * where the characters in the stream represent the unicode code points for
             * XML according to section 2 and appendix B of the XML 1.0 specification.
             * Although an encoding declaration other than unicode may be present,
             * the encoding of the stream is unicode.
             * The behavior of this method is the same as ResultSet.getCharacterStream()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not readable when this method is called and
             * may also become not writable depending on implementation.
             */
            // @ts-ignore
             getCharacterStream(): java.io.Reader;
            /**
             * Retrieves a stream to be used to write the XML value that this SQLXML instance represents.
             * The format of this stream is defined by org.xml.sax.InputSource,
             * where the characters in the stream represent the unicode code points for
             * XML according to section 2 and appendix B of the XML 1.0 specification.
             * Although an encoding declaration other than unicode may be present,
             * the encoding of the stream is unicode.
             * The behavior of this method is the same as ResultSet.updateCharacterStream()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not writeable when this method is called and
             * may also become not readable depending on implementation.
             */
            // @ts-ignore
             setCharacterStream(): java.io.Writer;
            /**
             * Returns a string representation of the XML value designated by this SQLXML instance.
             * The format of this String is defined by org.xml.sax.InputSource,
             * where the characters in the stream represent the unicode code points for
             * XML according to section 2 and appendix B of the XML 1.0 specification.
             * Although an encoding declaration other than unicode may be present,
             * the encoding of the String is unicode.
             * The behavior of this method is the same as ResultSet.getString()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not readable when this method is called and
             * may also become not writable depending on implementation.
             */
            // @ts-ignore
             getString(): string;
            /**
             * Sets the XML value designated by this SQLXML instance to the given String representation.
             * The format of this String is defined by org.xml.sax.InputSource,
             * where the characters in the stream represent the unicode code points for
             * XML according to section 2 and appendix B of the XML 1.0 specification.
             * Although an encoding declaration other than unicode may be present,
             * the encoding of the String is unicode.
             * The behavior of this method is the same as ResultSet.updateString()
             * when the designated column of the ResultSet has a type java.sql.Types of SQLXML.
             * <p>
             * The SQL XML object becomes not writeable when this method is called and
             * may also become not readable depending on implementation.
             */
            // @ts-ignore
             setString(value: string): void;
            /**
             * Returns a Source for reading the XML value designated by this SQLXML instance.
             * Sources are used as inputs to XML parsers and XSLT transformers.
             * <p>
             * Sources for XML parsers will have namespace processing on by default.
             * The systemID of the Source is implementation dependent.
             * <p>
             * The SQL XML object becomes not readable when this method is called and
             * may also become not writable depending on implementation.
             * <p>
             * Note that SAX is a callback architecture, so a returned
             * SAXSource should then be set with a content handler that will
             * receive the SAX events from parsing.  The content handler
             * will receive callbacks based on the contents of the XML.
             * <pre>
             * SAXSource saxSource = sqlxml.getSource(SAXSource.class);
             * XMLReader xmlReader = saxSource.getXMLReader();
             * xmlReader.setContentHandler(myHandler);
             * xmlReader.parse(saxSource.getInputSource());
             * </pre>
             */
            // @ts-ignore
             getSource(sourceClass: java.lang.Class): any /*javax.xml.transform.Source*/;
            /**
             * Returns a Result for setting the XML value designated by this SQLXML instance.
             * <p>
             * The systemID of the Result is implementation dependent.
             * <p>
             * The SQL XML object becomes not writeable when this method is called and
             * may also become not readable depending on implementation.
             * <p>
             * Note that SAX is a callback architecture and the returned
             * SAXResult has a content handler assigned that will receive the
             * SAX events based on the contents of the XML.  Call the content
             * handler with the contents of the XML document to assign the values.
             * <pre>
             * SAXResult saxResult = sqlxml.setResult(SAXResult.class);
             * ContentHandler contentHandler = saxResult.getXMLReader().getContentHandler();
             * contentHandler.startDocument();
             * // set the XML elements and attributes into the result
             * contentHandler.endDocument();
             * </pre>
             */
            // @ts-ignore
             setResult(resultClass: java.lang.Class): any /*javax.xml.transform.Result*/;
        }
    }
}
