package dk.dbc.mobib;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.dom.client.Document;

public class GwtMain implements EntryPoint {

	public void onModuleLoad() {
		Document.get().getBody().setInnerText("Hello from mobile biblitek.dk app skeleton...");
	}
}
