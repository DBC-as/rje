package dk.dbc.mobib;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.Element;

public class GwtMain implements EntryPoint {

	public void onModuleLoad() {
		Element	div = Document.get().createDivElement();
		div.setInnerText("Hello from mobile bibliotek.dk app skeleton...");
		Document.get().getBody().appendChild(div);
		
		
	}
}
